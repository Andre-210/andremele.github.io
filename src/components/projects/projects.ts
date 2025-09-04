import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Inject, 
  PLATFORM_ID,
  QueryList,
  ViewChildren
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { PROJECTS } from '../../config/config';
import { ProjectsConfig } from '../../models/models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
/*
 * implements lifecycle hook to manage the InteractionObserver
 */
export class Projects implements AfterViewInit, OnDestroy {
  /*
   * 'PLATFORM_ID' ~ used with 'isPlatformBrowser' to ensure that the component is visualized
   * background can be rendered in a browser environment
   */
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;

  // list of projects
  public projectsConfig: ProjectsConfig = PROJECTS;

  private observer?: IntersectionObserver;

  /*
   * an Angular lifecycle hook that runs once after the component's view is initialized
   * used here to set up the IntersectionObserver
   */
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        root: null,
        rootMargin: '0px 0px -150px 0px',
        threshold: 0
      };
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      }, options);
      this.projectCards.forEach(card => {
        this.observer?.observe(card.nativeElement);
      });
    }
  }

  /* an Angular lifecycle hook that runs just before the component is destroyed
   * used here to disconnect the observer to prevent memory leaks
   */
  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
