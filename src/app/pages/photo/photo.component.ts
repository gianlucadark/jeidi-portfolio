import { Component, inject } from '@angular/core';
import { BlobsComponent } from '../../shared/blobs/blobs.component';
import { CornerLogoComponent } from '../../shared/corner-logo/corner-logo.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { LangService } from '../../services/lang.service';

const PHOTOS = [
  'f1.webp', 'f2.webp', 'f3.webp', 'f4.webp', 'f5.webp',
  'f6.webp', 'f7.webp', 'f8.webp', 'f9.webp', 'f10.webp',
  'f11.webp', 'f12.webp', 'f13.webp', 'f14.webp', 'f15.webp',
  'f16.webp', 'f17.webp', 'f18.webp', 'f19.webp', 'f20.webp',
  'f21.webp', 'f22.webp', 'f23.webp',
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
