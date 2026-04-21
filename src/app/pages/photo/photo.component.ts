import { Component, inject } from '@angular/core';
import { BlobsComponent } from '../../shared/blobs/blobs.component';
import { CornerLogoComponent } from '../../shared/corner-logo/corner-logo.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { LangService } from '../../services/lang.service';

const PHOTOS = [
  'perlei-3.jpg', 'perlei-4.jpg', 'perlei-5.jpg',
  'perlei-6.jpg', 'perlei-7.jpg', 'ada-1.jpg',
  'ada-2.jpg', 'ada-3.jpg', 'riga-1.jpg',
  'riga-2.jpg', 'riga-4.jpg', 'regiro-1.jpg',
  'regiro-3.jpg', 'regiro-4.jpg',
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
