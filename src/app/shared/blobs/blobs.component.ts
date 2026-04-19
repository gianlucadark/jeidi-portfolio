import { Component, input, computed } from '@angular/core';
import { MousePos } from '../../services/mouse.service';

export type BlobMode = 'hero' | 'full' | 'none';

@Component({
  selector: 'app-blobs',
  standalone: true,
  templateUrl: './blobs.component.html',
  styleUrl: './blobs.component.scss'
})
export class BlobsComponent {
  mode = input<BlobMode>('hero');
  mouse = input<MousePos>({ x: 0, y: 0 });
  scroll = input(0);

  brownTransform = computed(() => {
    const m = this.mouse();
    const s = this.scroll() * 0.15;
    return `translate3d(${m.x * -12}px, ${m.y * -8 - s * 0.4}px, 0) rotate(34deg)`;
  });

  blueTransform = computed(() => {
    const m = this.mouse();
    const s = this.scroll() * 0.15;
    return `translate3d(${m.x * 10}px, ${m.y * 6 - s * 0.8}px, 0) rotate(34deg)`;
  });
}
