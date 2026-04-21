import { Component, inject, computed } from '@angular/core';
import { BlobsComponent } from '../../shared/blobs/blobs.component';
import { CornerLogoComponent } from '../../shared/corner-logo/corner-logo.component';
import { BrandProjectCardComponent } from '../../shared/brand-project-card/brand-project-card.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MouseService } from '../../services/mouse.service';
import { NavigationService } from '../../services/navigation.service';
import { LangService } from '../../services/lang.service';

const PROJECTS_BASE = [
  { id: 'ada',    title: 'ada festival',               descKey: 'brand.ada.desc',    img: 'ada-5.webp' },
  { id: 'ideate', title: 'Ideate',                     descKey: 'brand.ideate.desc', img: 'ideate-5.webp' },
  { id: 'riga',   title: 'Riga, the shape of tomorrow.', descKey: 'brand.riga.desc',img: 'riga-4.webp' },
];

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [BlobsComponent, CornerLogoComponent, BrandProjectCardComponent, FooterComponent],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss'
})
export class BrandComponent {
  mouseService = inject(MouseService);
  nav = inject(NavigationService);
  langService = inject(LangService);

  projects = computed(() =>
    PROJECTS_BASE.map(p => ({ ...p, desc: this.langService.t(p.descKey) }))
  );
}
