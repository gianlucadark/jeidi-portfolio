import { Component, input, inject, computed } from '@angular/core';
import { BlobsComponent } from '../blobs/blobs.component';
import { RevealImageComponent } from '../reveal-image/reveal-image.component';
import { ProjectGridComponent } from '../project-grid/project-grid.component';
import { FooterComponent } from '../footer/footer.component';
import { MouseService } from '../../services/mouse.service';
import { NavigationService } from '../../services/navigation.service';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-project-scaffold',
  standalone: true,
  imports: [BlobsComponent, RevealImageComponent, ProjectGridComponent, FooterComponent],
  templateUrl: './project-scaffold.component.html',
  styleUrl: './project-scaffold.component.scss'
})
export class ProjectScaffoldComponent {
  // Translation key prefix — pass e.g. "project.ada" and the scaffold resolves .subtitle, .body, .tagline
  projectKey = input('');

  title    = input('');
  hero     = input('');
  grid     = input<string[]>([]);
  layout   = input<string[]>([]);
  credits  = input<string[]>([]);

  mouseService = inject(MouseService);
  nav          = inject(NavigationService);
  langService  = inject(LangService);

  tagline  = computed(() => this.langService.t(`${this.projectKey()}.tagline`));
  subtitle = computed(() => this.langService.t(`${this.projectKey()}.subtitle`));
  body     = computed(() => this.langService.t(`${this.projectKey()}.body`));
  creditsLabel = computed(() => this.langService.t('credits.label'));
}
