import { Component, inject } from '@angular/core';
import { BlobsComponent } from '../../shared/blobs/blobs.component';
import { CornerLogoComponent } from '../../shared/corner-logo/corner-logo.component';
import { MouseService } from '../../services/mouse.service';

const CONTACTS = [
  { label: 'Jeidiclemente@gmail.com'.toUpperCase(), type: 'mail',      href: 'mailto:jeidiclemente@gmail.com' },
  { label: '+39 342 524 6479'.toUpperCase(),         type: 'phone',     href: 'tel:+393425246479' },
  { label: 'Jeidiclemente'.toUpperCase(),            type: 'linkedin',  href: 'https://www.linkedin.com/in/jeidi-clemente' },
  { label: 'Jeidirphoto'.toUpperCase(),              type: 'instagram', href: 'https://www.instagram.com/jeidirphoto' },
];

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [BlobsComponent, CornerLogoComponent],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.scss'
})
export class ContattiComponent {
  mouseService = inject(MouseService);
  contacts = CONTACTS;
}
