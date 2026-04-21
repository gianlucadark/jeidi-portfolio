import { Component, inject } from '@angular/core';
import { BlobsComponent } from '../../shared/blobs/blobs.component';
import { CornerLogoComponent } from '../../shared/corner-logo/corner-logo.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MouseService } from '../../services/mouse.service';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BlobsComponent, CornerLogoComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  mouseService = inject(MouseService);
  langService = inject(LangService);
}
