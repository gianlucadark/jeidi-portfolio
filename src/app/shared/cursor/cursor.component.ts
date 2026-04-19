import { Component, OnInit, ElementRef, ViewChild, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.scss'
})
export class CursorComponent implements OnInit {
  @ViewChild('ring', { static: true }) ringEl!: ElementRef<HTMLElement>;
  @ViewChild('dot', { static: true }) dotEl!: ElementRef<HTMLElement>;

  hoverTarget = signal<string | null>(null);
  mouseDown = signal(false);
  ringSize = signal(36);

  private platformId = inject(PLATFORM_ID);
  private pos = { x: -100, y: -100, tx: -100, ty: -100 };

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const onMove = (e: MouseEvent) => {
      this.pos.tx = e.clientX;
      this.pos.ty = e.clientY;
      const el = (e.target as Element)?.closest?.('[data-hover]');
      const t = el?.getAttribute('data-hover') ?? null;
      this.hoverTarget.set(t);
      this.ringSize.set(t === 'image' ? 120 : t === 'nav' ? 56 : t === 'circle' ? 96 : 36);
    };
    const onDown = () => this.mouseDown.set(true);
    const onUp = () => this.mouseDown.set(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    const tick = () => {
      this.pos.x += (this.pos.tx - this.pos.x) * 0.22;
      this.pos.y += (this.pos.ty - this.pos.y) * 0.22;
      const ring = this.ringEl.nativeElement;
      const dot = this.dotEl.nativeElement;
      const rs = this.ringSize();
      ring.style.transform = `translate3d(${this.pos.x - rs / 2}px, ${this.pos.y - rs / 2}px, 0)`;
      dot.style.transform = `translate3d(${this.pos.tx - 2.5}px, ${this.pos.ty - 2.5}px, 0)`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}
