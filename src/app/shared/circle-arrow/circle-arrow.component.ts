import { Component, input, output, computed } from '@angular/core';

export type ArrowDirection = 'down' | 'up' | 'left' | 'right';

@Component({
  selector: 'app-circle-arrow',
  standalone: true,
  templateUrl: './circle-arrow.component.html',
  styleUrl: './circle-arrow.component.scss'
})
export class CircleArrowComponent {
  direction = input<ArrowDirection>('down');
  borderColor = input('var(--ink)');
  iconColor = input('');
  clicked = output();

  svgTransform = computed(() => {
    const deg = ({ down: 0, up: 180, left: 90, right: -90 } as Record<string, number>)[this.direction()];
    return `rotate(${deg}deg)`;
  });
}
