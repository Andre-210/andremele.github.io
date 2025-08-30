import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Background } from './background/background';
import { INTRO } from '../../config/config';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, Background],
  templateUrl: './intro.html',
  styleUrl: './intro.css'
})
export class Intro {
  intro = INTRO;
}
