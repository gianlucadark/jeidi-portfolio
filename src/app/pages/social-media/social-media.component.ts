import { Component, inject } from '@angular/core';
import { BlobsComponent } from '../../shared/blobs/blobs.component';
import { CornerLogoComponent } from '../../shared/corner-logo/corner-logo.component';
import { BrandProjectCardComponent } from '../../shared/brand-project-card/brand-project-card.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MouseService } from '../../services/mouse.service';
import { NavigationService } from '../../services/navigation.service';

const PROJECTS = [
  { id: 'perlei', title: 'Perlei', desc: 'Editorial social content for a curated craft brand.', img: 'perlei-3.jpg' },
  { id: 'circus', title: 'Circus', desc: 'A traveling performance identity for social.',         img: 'circus-1.jpg' },
];

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [BlobsComponent, CornerLogoComponent, BrandProjectCardComponent, FooterComponent],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  mouseService = inject(MouseService);
  nav = inject(NavigationService);
  projects = PROJECTS;
}
