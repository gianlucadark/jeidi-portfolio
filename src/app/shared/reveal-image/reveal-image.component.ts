import { Component, input, signal, ElementRef, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-reveal-image',
  standalone: true,
  templateUrl: './reveal-image.component.html',
  styleUrl: './reveal-image.component.scss'
})
export class RevealImageComponent implements OnInit {
  src = input('');
  alt = input('');
  aspect = input('16/10');
  borderRadius = input(20);
  visible = signal(false);

  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.visible.set(true);
        io.disconnect();
      }
    }, { threshold: 0.05, rootMargin: '100px' });
    io.observe(this.el.nativeElement);
  }
}
