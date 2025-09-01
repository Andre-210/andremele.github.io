import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Intro } from '../components/intro/intro';
import { Socials } from '../components/socials/socials';
import { TechStack } from '../components/tech-stack/tech-stack';

@Component({
  selector: 'app-root',
    standalone: true,
  imports: [Header, Intro, Socials, TechStack],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('andremele.github.io');
}
