import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Intro } from '../components/intro/intro';

@Component({
  selector: 'app-root',
    standalone: true,
  imports: [Header, Intro],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('andremele.github.io');
}
