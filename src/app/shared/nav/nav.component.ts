import { Component, input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { LangService, Lang } from '../../services/lang.service';

const NAV_ITEMS = [
  { id: 'home',      labelKey: 'nav.home',        path: '/' },
  { id: 'design',    labelKey: 'nav.design',       path: '/design' },
  { id: 'photo',     labelKey: 'nav.photography',  path: '/photo' },
  { id: 'about',     labelKey: 'nav.about',        path: '/about' },
  { id: 'contatti',  labelKey: 'nav.contact',      path: '/contatti' },
];

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  textColor = input('var(--ink)');
  items = NAV_ITEMS;
  nav = inject(NavigationService);
  langService = inject(LangService);
  private router = inject(Router);

  isActive(path: string): boolean {
    const url = this.router.url.split('?')[0];
    if (path === '/') return url === '/';
    return url.startsWith(path);
  }

  setLang(l: Lang): void { this.langService.setLang(l); }
}
