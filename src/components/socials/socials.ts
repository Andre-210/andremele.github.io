import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SOCIALS } from '../../config/config';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './socials.html',
  styleUrls: ['./socials.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Socials {
  socials = SOCIALS;
}
