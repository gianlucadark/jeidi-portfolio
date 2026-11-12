import { Component, inject } from '@angular/core';
import { BlobsComponent } from '../../../shared/blobs/blobs.component';
import { RevealImageComponent } from '../../../shared/reveal-image/reveal-image.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { MouseService } from '../../../services/mouse.service';
import { LangService } from '../../../services/lang.service';

@Component({
  selector: 'app-sensis',
  standalone: true,
  imports: [BlobsComponent, RevealImageComponent, FooterComponent],
  templateUrl: './sensis.component.html',
  styleUrls: ['../../../shared/project-scaffold/project-scaffold.component.scss', './sensis.component.scss']
})
export class SensisComponent {
  mouseService = inject(MouseService);
  private langService = inject(LangService);

  t(key: string): string { return this.langService.t(key); }
}
