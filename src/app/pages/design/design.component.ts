import { Component, inject } from '@angular/core';
import { CornerLogoComponent } from '../../shared/corner-logo/corner-logo.component';
import { NavigationService } from '../../services/navigation.service';
import { LangService } from '../../services/lang.service';

const PANELS = [
  { id: 'uxui',        labelKey: 'panel.uxui',   img: 'brand-uxui.webp' },
  { id: 'brand',       labelKey: 'panel.brand',  img: 'ideate-1.webp' },
  { id: 'socialmedia', labelKey: 'panel.social', img: 'brand-social.webp' },
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
  langService = inject(LangService);
}
