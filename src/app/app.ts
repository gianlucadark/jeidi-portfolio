import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs';
import { NavComponent } from './shared/nav/nav.component';
import { MobileNavComponent } from './shared/mobile-nav/mobile-nav.component';
import { CursorComponent } from './shared/cursor/cursor.component';
import { PageTransitionComponent } from './shared/page-transition/page-transition.component';
import { NavigationService } from './services/navigation.service';
import { MouseService } from './services/mouse.service';
import { SnapScrollService } from './services/snap-scroll.service';

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
  private snapScroll = inject(SnapScrollService);
  private router = inject(Router);

  navColor = signal('var(--ink)');

  ngOnInit(): void {
    this.mouseService.init();
    this.snapScroll.init();
    this.router.events.pipe(
      filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      this.navColor.set(e.urlAfterRedirects === '/photo' ? 'var(--white)' : 'var(--ink)');
    });
  }
}
