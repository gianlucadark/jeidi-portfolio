import { Component, OnInit, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BlobsComponent } from '../../shared/blobs/blobs.component';
import { LogoComponent } from '../../shared/logo/logo.component';
import { CircleArrowComponent } from '../../shared/circle-arrow/circle-arrow.component';
import { RevealImageComponent } from '../../shared/reveal-image/reveal-image.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MouseService } from '../../services/mouse.service';
import { NavigationService } from '../../services/navigation.service';

const PROJECTS = [
  { id: 'ada',    title: 'ada festival',     kind: 'Festival rebranding', img: 'ada-5.jpg' },
  { id: 'ideate', title: 'ideate',           kind: 'Logo design',          img: 'ideate-5.jpg' },
  { id: 'riga',   title: 'riga',             kind: 'Brand identity',       img: 'riga-4.jpg' },
  { id: 'ia',     title: "L'IA e la società moderna", kind: 'Information design', img: 'ia-3fd2d896b0ee.jpg' },
  { id: 'perlei', title: 'perlei',           kind: 'Social media design',  img: 'perlei-3.jpg' },
  { id: 'circus', title: 'circus',           kind: 'Brand identity',       img: 'circus-1.jpg' },
];

const SPANS = ['span 7', 'span 5', 'span 5', 'span 7', 'span 6', 'span 6'];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlobsComponent, LogoComponent, CircleArrowComponent, RevealImageComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  mouseService = inject(MouseService);
  nav = inject(NavigationService);
  private platformId = inject(PLATFORM_ID);

  mounted = signal(false);
  projects = PROJECTS;
  spans = SPANS;
  line1 = 'Designing experiences'.split(' ');
  line2 = 'for people and brands'.split(' ');

  numLabel(i: number): string {
    return String(i + 1).padStart(2, '0');
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      requestAnimationFrame(() => this.mounted.set(true));
    }
  }

  scrollDown(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  }
}
