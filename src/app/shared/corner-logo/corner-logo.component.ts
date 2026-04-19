import { Component, input, inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-corner-logo',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './corner-logo.component.html',
  styleUrl: './corner-logo.component.scss'
})
export class CornerLogoComponent {
  color = input('var(--ink)');
  nav = inject(NavigationService);
}
