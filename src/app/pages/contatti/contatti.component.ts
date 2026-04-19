import { Component, inject } from '@angular/core';
import { BlobsComponent } from '../../shared/blobs/blobs.component';
import { CornerLogoComponent } from '../../shared/corner-logo/corner-logo.component';
import { MouseService } from '../../services/mouse.service';

const CONTACTS = [
  { label: 'Jeidiclemente@gmail.com', type: 'mail',      href: 'mailto:jeidiclemente@gmail.com' },
  { label: '+39 342 524 6479',         type: 'phone',     href: 'tel:+393425246479' },
  { label: 'Jeidiclemente',            type: 'linkedin',  href: 'https://linkedin.com/in/jeidiclemente' },
  { label: 'Jeidirphoto',              type: 'instagram', href: 'https://instagram.com/jeidirphoto' },
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
