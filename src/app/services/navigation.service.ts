import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

export type TransitionPhase = 'idle' | 'out' | 'in';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private _phase = signal<TransitionPhase>('idle');
  readonly phase = this._phase.asReadonly();

  navigate(path: string): void {
    const target = path === 'home' ? '/' : `/${path}`;
    const current = this.router.url.split('?')[0];
    if (current === target) return;

    if (!isPlatformBrowser(this.platformId)) {
      this.router.navigate([target]);
      return;
    }

    this._phase.set('out');
    setTimeout(() => {
      this.router.navigate([target]).then(() => {
        window.scrollTo(0, 0);
        this._phase.set('in');
        setTimeout(() => this._phase.set('idle'), 600);
      });
    }, 600);
  }
}
