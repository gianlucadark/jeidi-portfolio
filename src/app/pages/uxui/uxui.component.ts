import { Component, inject, computed } from '@angular/core';
import { BlobsComponent } from '../../shared/blobs/blobs.component';
import { CornerLogoComponent } from '../../shared/corner-logo/corner-logo.component';
import { BrandProjectCardComponent } from '../../shared/brand-project-card/brand-project-card.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MouseService } from '../../services/mouse.service';
import { NavigationService } from '../../services/navigation.service';
import { LangService } from '../../services/lang.service';

const PROJECTS_BASE = [
  { id: 'regiro', title: 'Regiro',                                        descKey: 'uxui.regiro.desc', img: 'regiro-1.webp' },
  { id: 'circus', title: 'CIRCUS Magazine',                               descKey: 'uxui.circus.desc', img: 'circus-4.webp' },
  { id: 'ia',     title: "L'Intelligenza artificiale e la società moderna", descKey: 'uxui.ia.desc',    img: 'ia-3fd2d896b0ee.webp' },
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
  langService = inject(LangService);

  projects = computed(() =>
    PROJECTS_BASE.map(p => ({ ...p, desc: this.langService.t(p.descKey) }))
  );
}
