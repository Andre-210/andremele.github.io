import {
  AfterViewInit,
  Component,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  NodeData,
  LinkData,
} from '../../models/models';
import * as d3 from 'd3';

@Component({
  selector: 'app-background',
  standalone: true,
  templateUrl: './background.html',
  styleUrl: './background.css'
})
/*
 * implements lifecycle hooks to safely create and clean up the D3 visualization
 */
export class Background implements AfterViewInit {
  /*
   * 'PLATFORM_ID' ~ used with 'isPlatformBrowser' to ensure that the D3.js visualized
   * background can be rendered in a browser environment
   */
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  // properties to hold D3 selections and data
  private container: d3.Selection<d3.BaseType, unknown, HTMLElement, unknown> | undefined;
  private circles: d3.Selection<SVGCircleElement, NodeData, SVGSVGElement, unknown> | undefined;
  private linkGroup: d3.Selection<SVGGElement, unknown, SVGSVGElement, unknown> | undefined;

  // D3 background color scale
  private backgroundColorScale = d3.scaleLinear<string>()
  .domain([0, 0.5, 1])
  .range(['#1a1a1a', '#4d4c4c', '#FDFBD4'])
  .clamp(true);
  
  // D3 nodes and links color scale
  private d3ObjectColorScale = d3.scaleLinear<string>()
  .domain([0, 0.5])
  .range(['#FFFFFF', '#000000'])
  .clamp(true);

  // D3 header and social color scale
  private headerSocialColorScale = d3.scaleLinear<string>()
  .domain([0.9, 1])
  .range(['#FFFFFF', '#000000'])
  .clamp(true);

  /*
   * an Angular lifecycle hook that runs after the component's view is initialized
   * it initializes the D3 background and sets up the scroll event listener
   */
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.createD3Background();
      this.onScroll(); 
      window.addEventListener('scroll', this.onScroll);
    }
  }

  /*
   * an Angular lifecycle hook runs just before the component is destroyed
   * removes the scroll listener to prevent memory leaks
   */
  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  /*
   * event handler for scrolling
   * calculates the scroll percentage and updates colors accordingly
   */
  private onScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - clientHeight) || 0;
    // calculate and apply the new background color
    const newBackgroundColor = this.backgroundColorScale(scrollPercent);
    if (this.container) {
      this.container.style('background-color', newBackgroundColor);
    }
    // calculate and apply the new color for D3 elements
    const newD3ColorString = this.d3ObjectColorScale(scrollPercent);
    const newD3Color = d3.rgb(newD3ColorString);
    // update the circle elements
    if (this.circles) {
      this.circles.attr('fill', newD3Color.copy({opacity: 0.5}).toString());
    }
    // update line elements
    if (this.linkGroup) {
      const strokeRgba = `rgba(${newD3Color.r}, ${newD3Color.g}, ${newD3Color.b}, 0.4)`;
      this.linkGroup.selectAll("line").attr("stroke", strokeRgba);;
    }
    // calculate and apply the new color for the header and social components
    if (window.innerWidth > 768) {
        // calculate and apply the new color for the header and social components
        const newElementColor = this.headerSocialColorScale(scrollPercent);
        this.updateElementColor('nav.nav a.nav-link', newElementColor);
        this.updateElementColor('.socials-container ul a', newElementColor);
        this.updateElementColor('.email-container a', newElementColor);
        this.updateElementColor('.name-container h1', newElementColor);
        this.updateElementColor('.description p', newElementColor);
    }
  };

  /*
   * helper function to update the color of specified elements
   */
  private updateElementColor(selector: string, color: string): void {
    d3.selectAll(selector).style('color', color);
  }

  /*
  * sets up the initial D3 scene: creates the SVG container,
  * generates node data, and starts the animation timer
  */
  private createD3Background(): void {
    // prepare for the render by inserting a new svg to the div
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.container = d3.select("#d3-background-container");
    const svg = this.container.append("svg")
      .attr("width", width)
      .attr("height", height);

    // create the data for the graphic
    const numNodes = 100;
    const linkDistance = 150;
    const nodes: NodeData[] = d3.range(numNodes).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }));
    this.circles = svg.selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", 2);
    this.linkGroup = svg.append("g") as unknown as d3.Selection<SVGGElement, unknown, SVGSVGElement, unknown>;
    const self = this;

    /*
    * function that is called repeatedly for every frame of the graphic
    */
    function ticked() {
      // update the node positions
      nodes.forEach((d: NodeData) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = width;
        if (d.x > width) d.x = 0;
        if (d.y < 0) d.y = height;
        if (d.y > height) d.y = 0;
      });

      // update the circle elements positions
      if (self.circles) {
        self.circles
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);
      }

      // draw the lines for the nodes near each other
      const links: LinkData[] = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist < linkDistance) {
            links.push({ source: nodes[i], target: nodes[j], opacity: 1 - dist / linkDistance });
          }
        }
      }

      // update the line elements
      if (self.linkGroup) {
        const lines = self.linkGroup.selectAll<SVGLineElement, LinkData>("line")
        .data(links);
        lines.enter().append("line")
        .attr("stroke", `rgba(255, 255, 255, 0.4)`)
        .merge(lines)
        .attr("x1", (d: LinkData) => d.source.x)
        .attr("y1", (d: LinkData) => d.source.y)
        .attr("x2", (d: LinkData) => d.target.x)
        .attr("y2", (d: LinkData) => d.target.y)
        .attr("stroke-opacity", d => d.opacity);
        lines.exit().remove();
      }
    }

    // call for the next frame
    d3.timer(ticked);
  }
}