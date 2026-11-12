import { Component, inject } from '@angular/core';
import { BlobsComponent } from '../../../shared/blobs/blobs.component';
import { RevealImageComponent } from '../../../shared/reveal-image/reveal-image.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { MouseService } from '../../../services/mouse.service';
import { LangService } from '../../../services/lang.service';

@Component({
  selector: 'app-mediterranei',
  standalone: true,
  imports: [BlobsComponent, RevealImageComponent, FooterComponent],
  templateUrl: './mediterranei.component.html',
  styleUrls: ['../../../shared/project-scaffold/project-scaffold.component.scss', './mediterranei.component.scss']
})
export class MediterraneiComponent {
  mouseService = inject(MouseService);
  private langService = inject(LangService);

  t(key: string): string { return this.langService.t(key); }
}
