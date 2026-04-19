import { Component, input } from '@angular/core';
import { RevealImageComponent } from '../reveal-image/reveal-image.component';

const PATTERN = ['span 6', 'span 2', 'span 4', 'span 3', 'span 3', 'span 6', 'span 4', 'span 2', 'span 6'];
const ASPECTS: Record<string, string> = {
  'span 6': '16/9',
  'span 4': '4/3',
  'span 3': '4/3',
  'span 2': '1/1',
};

@Component({
  selector: 'app-project-grid',
  standalone: true,
  imports: [RevealImageComponent],
  templateUrl: './project-grid.component.html',
  styleUrl: './project-grid.component.scss'
})
export class ProjectGridComponent {
  images = input<string[]>([]);

  span(i: number): string {
    return PATTERN[i % PATTERN.length];
  }

  aspect(i: number): string {
    return ASPECTS[this.span(i)] ?? '4/3';
  }
}
