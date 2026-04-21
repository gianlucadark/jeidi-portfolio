import { Component, inject } from '@angular/core';
import { BlobsComponent } from '../../shared/blobs/blobs.component';
import { CornerLogoComponent } from '../../shared/corner-logo/corner-logo.component';
import { BrandProjectCardComponent } from '../../shared/brand-project-card/brand-project-card.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MouseService } from '../../services/mouse.service';
import { NavigationService } from '../../services/navigation.service';

const PROJECTS = [
  { id: 'regiro', title: 'Regiro',                                        desc: 'A walking-tour app that turns the city into stories.',                  img: 'regiro-1.jpg' },
  { id: 'circus', title: 'CIRCUS Magazine',                               desc: 'A print and digital magazine that explores modern society.',             img: 'circus-4.jpg' },
  { id: 'ia',     title: "L'Intelligenza artificiale e la società moderna", desc: 'An information design that tackles the impact of AI in society.',      img: 'ia-3fd2d896b0ee.jpg' },
];

@Component({
  selector: 'app-uxui',
  standalone: true,
  imports: [BlobsComponent, CornerLogoComponent, BrandProjectCardComponent, FooterComponent],
  templateUrl: './uxui.component.html',
  styleUrl: './uxui.component.scss'
})
export class UxuiComponent {
  mouseService = inject(MouseService);
  nav = inject(NavigationService);
  projects = PROJECTS;
}
