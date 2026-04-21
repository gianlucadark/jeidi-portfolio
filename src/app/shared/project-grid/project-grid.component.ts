import { Component, input } from '@angular/core';
import { RevealImageComponent } from '../reveal-image/reveal-image.component';

const DEFAULT_PATTERN = ['span 6', 'span 2', 'span 4', 'span 3', 'span 3', 'span 6', 'span 4', 'span 2', 'span 6'];

const ROW_ASPECTS: Record<string, string> = {
  'span 6': '16/9',
  'span 4': '4/3',
  'span 3': '4/3',
  'span 2': '4/3',
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
  layout = input<string[]>([]);

  span(i: number): string {
    const l = this.layout();
    return l[i] ?? DEFAULT_PATTERN[i % DEFAULT_PATTERN.length];
  }

  rowAspect(i: number): string {
    return ROW_ASPECTS[this.span(i)] ?? '4/3';
  }
}
