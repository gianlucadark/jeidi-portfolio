import { Component, inject } from '@angular/core';
import { BlobsComponent } from '../../shared/blobs/blobs.component';
import { CornerLogoComponent } from '../../shared/corner-logo/corner-logo.component';
import { BrandProjectCardComponent } from '../../shared/brand-project-card/brand-project-card.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MouseService } from '../../services/mouse.service';
import { NavigationService } from '../../services/navigation.service';

const PROJECTS = [
  { id: 'perlei', title: 'Perlei - Gioielli artigianali',  desc: 'A rebranding in social communication for a jewelry brand.',          img: 'perlei-3.jpg' },
  { id: 'circus-sm', title: 'CIRCUS Magazine',                desc: 'A digital extent of the print and digital magazine.',           img: 'circus-1.jpg' },
  { id: 'riga-sm',   title: 'Riga, the shape of tomorrow.',   desc: 'An advertising campaign of the city through social media.',    img: 'riga-2.jpg' },
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
