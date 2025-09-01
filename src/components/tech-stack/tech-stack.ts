import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser} from '@angular/common';
import { TECH_STACK } from '../../config/config';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.css'
})
/*
 * implements lifecycle hooks to manage the InteractionObserver
 */
export class TechStack implements AfterViewInit, OnDestroy {
  /*
   * 'PLATFORM_ID' ~ used with 'isPlatformBrowser' to ensure that the component can be
   * rendered in a browser environment
   * 'ElementRef' is injected to access the components host element
   */
  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  
  // watch the component enter or leave the screen
  private observer: IntersectionObserver | undefined;

  techStack = TECH_STACK;

  // signal to track the visibility
  isVisible = signal(false);
  
  /*
   * an Angular lifecycle hook that runs once after the component's view is initialized
   * used here to set up the IntersectionObserver
   */
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // define the observer's options, the negative rootMargin makes the
      // animation trigger only after the user has scrolled 250px past the element's top edge
      const options = {
        rootMargin: "0px 0px -250px 0px"
      };
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          this.isVisible.set(entry.isIntersecting);
        });
      }, options);
      // observe the component's host element
      this.observer.observe(this.elementRef.nativeElement);
    }
  }

  /*
   * an Angular lifecycle hook that runs just before the component is destroyed
   * used here to disconnect the observer to prevent memory leaks
   */
  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.observer?.disconnect();
    }
  }
}