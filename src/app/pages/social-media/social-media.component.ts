import { Component, inject, computed } from '@angular/core';
import { BlobsComponent } from '../../shared/blobs/blobs.component';
import { CornerLogoComponent } from '../../shared/corner-logo/corner-logo.component';
import { BrandProjectCardComponent } from '../../shared/brand-project-card/brand-project-card.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MouseService } from '../../services/mouse.service';
import { NavigationService } from '../../services/navigation.service';
import { LangService } from '../../services/lang.service';

const PROJECTS_BASE = [
  { id: 'perlei',    title: 'Perlei - Gioielli artigianali', descKey: 'social.perlei.desc', img: 'perlei-3.webp' },
  { id: 'circus-sm', title: 'CIRCUS Magazine',               descKey: 'social.circus.desc', img: 'circus-1.webp' },
  { id: 'riga-sm',   title: 'Riga, the shape of tomorrow.',  descKey: 'social.riga.desc',   img: 'riga-2.webp' },
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
  langService = inject(LangService);

  projects = computed(() =>
    PROJECTS_BASE.map(p => ({ ...p, desc: this.langService.t(p.descKey) }))
  );
}
