import { Component, input, signal, inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { NavigationService } from '../../services/navigation.service';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'design', label: 'Design' },
  { id: 'photo', label: 'Photography' },
  { id: 'about', label: 'About' },
  { id: 'contatti', label: 'Contact' },
];

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss'
})
export class MobileNavComponent {
  textColor = input('var(--ink)');
  items = NAV_ITEMS;
  open = signal(false);
  navService = inject(NavigationService);

  go(id: string): void {
    this.navService.navigate(id);
    this.open.set(false);
  }
}
