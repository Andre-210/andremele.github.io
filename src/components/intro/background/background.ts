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
} from '../../../models/models';
import * as d3 from 'd3';

@Component({
  selector: 'app-background',
  standalone: true,
  templateUrl: './background.html',
  styleUrl: './background.css'
})
/*
 * by implementing AfterViewInit we ensures that the background container exists
 * in the DOM before use
 */
export class Background implements AfterViewInit {
  /*
   * 'PLATFORM_ID' ~ used with 'isPlatformBrowser' to ensure that the D3.js visualized
   * background can be rendered in a browser environment
   */
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  /*
   * an Angular lifecycle hook that runs after the backgrounds HTML view is initialized
   * creates a D3 background
   */
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.createD3Background();
    }
  }

/*
 * render a background graphic
 */
private createD3Background(): void {
  // prepare for the render by inserting a new svg to the div
  const width = window.innerWidth;
  const height = window.innerHeight;
  const container = d3.select("#d3-background-container");
  const svg = container.append("svg")
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
  const circles = svg.selectAll("circle")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("r", 2)
    .attr("fill", "rgba(255, 255, 255, 0.5)");
  const linkGroup = svg.append("g");

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
    circles
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

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
    linkGroup.selectAll("line")
      .data(links)
      .join("line")
      .attr("x1", (d: LinkData) => d.source.x)
      .attr("y1", (d: LinkData) => d.source.y)
      .attr("x2", (d: LinkData) => d.target.x)
      .attr("y2", (d: LinkData) => d.target.y)
      .attr("stroke", "rgba(255, 255, 255, 0.2)")
      .attr("stroke-opacity", d => d.opacity);
  }

  // call for the next frame
  d3.timer(ticked);
}
}