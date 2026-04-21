import { Component, input, inject } from '@angular/core';
import { BlobsComponent } from '../blobs/blobs.component';
import { CircleArrowComponent } from '../circle-arrow/circle-arrow.component';
import { RevealImageComponent } from '../reveal-image/reveal-image.component';
import { ProjectGridComponent } from '../project-grid/project-grid.component';
import { FooterComponent } from '../footer/footer.component';
import { MouseService } from '../../services/mouse.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-project-scaffold',
  standalone: true,
  imports: [BlobsComponent, CircleArrowComponent, RevealImageComponent, ProjectGridComponent, FooterComponent],
  templateUrl: './project-scaffold.component.html',
  styleUrl: './project-scaffold.component.scss'
})
export class ProjectScaffoldComponent {
  title = input('');
  subtitle = input('');
  body = input('');
  hero = input('');
  grid = input<string[]>([]);

  mouseService = inject(MouseService);
  nav = inject(NavigationService);
}
