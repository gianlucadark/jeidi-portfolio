import { Component, OnInit, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BlobsComponent } from '../../shared/blobs/blobs.component';
import { LogoComponent } from '../../shared/logo/logo.component';
import { CircleArrowComponent } from '../../shared/circle-arrow/circle-arrow.component';
import { RevealImageComponent } from '../../shared/reveal-image/reveal-image.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MouseService } from '../../services/mouse.service';
import { NavigationService } from '../../services/navigation.service';
import { LangService } from '../../services/lang.service';

const PROJECTS = [
  { id: 'regiro', title: 'regiro',           kind: 'Brand identity',       img: 'regiro-1.jpg' },
  { id: 'perlei', title: 'perlei',           kind: 'Social media design',  img: 'perlei-7.jpg' },
  { id: 'riga',   title: 'riga',             kind: 'Brand identity',       img: 'riga-4.jpg' },
  { id: 'ada',    title: 'ada festival',     kind: 'Festival rebranding',  img: 'ada-1.jpg' },
  { id: 'circus', title: 'circus',           kind: 'Brand identity',       img: 'circus-1.jpg' },
  { id: 'ideate', title: 'ideate',           kind: 'Logo design',          img: 'ideate-3.jpg' },
];

const SPANS = ['span 7', 'span 5', 'span 5', 'span 7', 'span 6', 'span 6'];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlobsComponent, CircleArrowComponent, RevealImageComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  mouseService = inject(MouseService);
  nav = inject(NavigationService);
  langService = inject(LangService);
  private platformId = inject(PLATFORM_ID);

  mounted = signal(false);
  projects = PROJECTS;
  spans = SPANS;
  line1 = 'Designing experiences'.split(' ');
  line2 = 'for people and brands'.split(' ');

  get projectColumns() {
    return [0, 1, 2].map(ci => this.projects.filter((_, i) => i % 3 === ci));
  }

  numLabel(i: number): string {
    return String(i + 1).padStart(2, '0');
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      requestAnimationFrame(() => this.mounted.set(true));
    }
  }

  scrollTo(selector: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.querySelector(selector);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
