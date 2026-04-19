import { Component, inject } from '@angular/core';
import { BlobsComponent } from '../../shared/blobs/blobs.component';
import { CornerLogoComponent } from '../../shared/corner-logo/corner-logo.component';
import { CircleArrowComponent } from '../../shared/circle-arrow/circle-arrow.component';
import { BrandProjectCardComponent } from '../../shared/brand-project-card/brand-project-card.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MouseService } from '../../services/mouse.service';
import { NavigationService } from '../../services/navigation.service';

const PROJECTS = [
  { id: 'ada',    title: 'ada festival',              desc: 'A festival rebranding rooted in nature and warm summer nights.', img: 'ada-5.jpg' },
  { id: 'ideate', title: 'Ideate',                    desc: 'A logo design for a creative studio.', img: 'ideate-5.jpg' },
  { id: 'riga',   title: 'Riga, the shape of tomorrow.', desc: 'A brand identity built from a single line.', img: 'riga-4.jpg' },
];

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [BlobsComponent, CornerLogoComponent, CircleArrowComponent, BrandProjectCardComponent, FooterComponent],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss'
})
export class BrandComponent {
  mouseService = inject(MouseService);
  nav = inject(NavigationService);
  projects = PROJECTS;
}
