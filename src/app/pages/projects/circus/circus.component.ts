import { Component, inject, computed } from '@angular/core';
import { BlobsComponent } from '../../../shared/blobs/blobs.component';
import { RevealImageComponent } from '../../../shared/reveal-image/reveal-image.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { MouseService } from '../../../services/mouse.service';
import { NavigationService } from '../../../services/navigation.service';
import { LangService } from '../../../services/lang.service';

@Component({
  selector: 'app-circus',
  standalone: true,
  imports: [BlobsComponent, RevealImageComponent, FooterComponent],
  templateUrl: './circus.component.html',
  styleUrl: './circus.component.scss'
})
export class CircusComponent {
  mouseService = inject(MouseService);
  nav         = inject(NavigationService);
  langService = inject(LangService);

  tagline  = computed(() => this.langService.t('project.circus.tagline'));
  subtitle = computed(() => this.langService.t('project.circus.subtitle'));
  body     = computed(() => this.langService.t('project.circus.body'));
  body2    = computed(() => this.langService.t('project.circus.body2'));
}
