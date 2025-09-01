import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INTRO } from '../../config/config';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.html',
  styleUrl: './intro.css'
})
export class Intro {
  intro = INTRO;
}
