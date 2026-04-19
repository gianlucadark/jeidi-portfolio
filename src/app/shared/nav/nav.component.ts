import { Component, input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'design', label: 'Design', path: '/design' },
  { id: 'photo', label: 'Photography', path: '/photo' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'contatti', label: 'Contact', path: '/contatti' },
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
  private router = inject(Router);

  isActive(path: string): boolean {
    const url = this.router.url.split('?')[0];
    if (path === '/') return url === '/';
    return url.startsWith(path);
  }
}
