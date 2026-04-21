import { Component, inject } from '@angular/core';
import { BlobsComponent } from '../../shared/blobs/blobs.component';
import { CornerLogoComponent } from '../../shared/corner-logo/corner-logo.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { LangService } from '../../services/lang.service';

const PHOTOS = [
  'perlei-3.webp', 'perlei-4.webp', 'perlei-5.webp',
  'perlei-6.webp', 'perlei-7.webp', 'ada-1.webp',
  'ada-2.webp', 'ada-3.webp', 'riga-1.webp',
  'riga-2.webp', 'riga-4.webp', 'regiro-1.webp',
  'regiro-3.webp', 'regiro-4.webp',
];

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [BlobsComponent, CornerLogoComponent, FooterComponent],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent {
  photos = PHOTOS;
  langService = inject(LangService);
}
