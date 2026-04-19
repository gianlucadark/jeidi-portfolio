import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface MousePos { x: number; y: number; }

@Injectable({ providedIn: 'root' })
export class MouseService {
  private platformId = inject(PLATFORM_ID);
  private _mouse = signal<MousePos>({ x: 0, y: 0 });
  readonly mouse = this._mouse.asReadonly();

  init(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    let raf: number | null = null;
    const onMove = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        this._mouse.set({
          x: e.clientX / window.innerWidth - 0.5,
          y: e.clientY / window.innerHeight - 0.5,
        });
        raf = null;
      });
    };
    window.addEventListener('mousemove', onMove);
  }
}
