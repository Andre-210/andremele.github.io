import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Intro } from '../components/intro/intro';
import { Socials } from '../components/socials/socials';

@Component({
  selector: 'app-root',
    standalone: true,
  imports: [Header, Intro, Socials],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('andremele.github.io');
}
