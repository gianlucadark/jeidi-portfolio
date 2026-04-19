import { Component, input, output, signal, ElementRef, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface ProjectCard {
  id: string;
  title: string;
  desc: string;
  img: string;
}

@Component({
  selector: 'app-brand-project-card',
  standalone: true,
  templateUrl: './brand-project-card.component.html',
  styleUrl: './brand-project-card.component.scss'
})
export class BrandProjectCardComponent implements OnInit {
  project = input.required<ProjectCard>();
  clicked = output();
  visible = signal(false);

  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { this.visible.set(true); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(this.el.nativeElement);
  }
}
