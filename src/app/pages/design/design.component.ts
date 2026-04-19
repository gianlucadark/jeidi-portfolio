import { Component, inject } from '@angular/core';
import { CornerLogoComponent } from '../../shared/corner-logo/corner-logo.component';
import { NavigationService } from '../../services/navigation.service';

const PANELS = [
  { id: 'uxui',        label: 'UX/UI Design',             img: 'brand-uxui.jpg' },
  { id: 'brand',       label: 'Brand and Visual Identity', img: 'ideate-1.jpg' },
  { id: 'socialmedia', label: 'Social media design',       img: 'brand-social.jpg' },
];

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [CornerLogoComponent],
  templateUrl: './design.component.html',
  styleUrl: './design.component.scss'
})
export class DesignComponent {
  panels = PANELS;
  nav = inject(NavigationService);
}
