import { Component, OnInit, inject, signal, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, Event } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs';
import { NavComponent } from './shared/nav/nav.component';
import { MobileNavComponent } from './shared/mobile-nav/mobile-nav.component';
import { CursorComponent } from './shared/cursor/cursor.component';
import { PageTransitionComponent } from './shared/page-transition/page-transition.component';
import { NavigationService } from './services/navigation.service';
import { MouseService } from './services/mouse.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, MobileNavComponent, CursorComponent, PageTransitionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App implements OnInit {
  navService = inject(NavigationService);
  private mouseService = inject(MouseService);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  navColor = signal('var(--ink)');

  ngOnInit(): void {
    this.mouseService.init();
    this.initSmoothScroll();
    this.router.events.pipe(
      filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      this.navColor.set(e.urlAfterRedirects === '/photo' ? 'var(--white)' : 'var(--ink)');
    });
  }

  private initSmoothScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (matchMedia('(pointer: coarse)').matches) return;

    let targetScroll = 0;
    let currentScroll = 0;
    const EASE = 0.085;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(window.scrollY - currentScroll) > 10) {
        currentScroll = window.scrollY;
        targetScroll = window.scrollY;
      }
      targetScroll = Math.max(0, Math.min(
        document.documentElement.scrollHeight - window.innerHeight,
        targetScroll + e.deltaY
      ));
    };

    const tick = () => {
      const diff = targetScroll - currentScroll;
      if (Math.abs(diff) > 0.1) {
        currentScroll += diff * EASE;
        window.scrollTo(0, currentScroll);
      }
      requestAnimationFrame(tick);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    requestAnimationFrame(tick);

    this.router.events.pipe(
      filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe(() => {
      targetScroll = 0;
      currentScroll = 0;
    });
  }
}
