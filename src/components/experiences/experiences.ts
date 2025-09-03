import { Component, ElementRef, AfterViewInit, QueryList, ViewChildren, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { EXPERIENCES } from '../../config/config';
import { Experience } from '../../models/models';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.html',
  styleUrl: './experiences.css'
})
/*
 * implements lifecycle hook to manage the InteractionObserver
 */
export class Experiences implements AfterViewInit {
  /*
   * 'PLATFORM_ID' ~ used with 'isPlatformBrowser' to ensure that the component is visualized
   * background can be rendered in a browser environment
   */
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  @ViewChild('titleEl') titleRef!: ElementRef;
  @ViewChildren('card') cards!: QueryList<ElementRef>;

  title = EXPERIENCES.title;

  // list of experiences
  experiences: Experience[] = EXPERIENCES.experiences;

  /*
   * an Angular lifecycle hook that runs once after the component's view is initialized
   * used here to set up the IntersectionObserver
   */
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const isMobile = window.innerWidth < 768;
      const options = {
        rootMargin: isMobile ? '-100px 0px -100px 0px' : '-250px 0px -250px 0px'
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      }, options);

      observer.observe(this.titleRef.nativeElement);

      this.cards.forEach(card => {
        observer.observe(card.nativeElement);
      });
    }
  }
}
