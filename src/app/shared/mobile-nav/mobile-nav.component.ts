import { Component, input, signal, inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { NavigationService } from '../../services/navigation.service';
import { LangService, Lang } from '../../services/lang.service';

const NAV_ITEMS = [
  { id: 'home',      labelKey: 'nav.home' },
  { id: 'design',    labelKey: 'nav.design' },
  { id: 'photo',     labelKey: 'nav.photography' },
  { id: 'about',     labelKey: 'nav.about' },
  { id: 'contatti',  labelKey: 'nav.contact' },
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
  langService = inject(LangService);

  go(id: string): void {
    this.navService.navigate(id);
    this.open.set(false);
  }

  setLang(l: Lang): void { this.langService.setLang(l); }
}
