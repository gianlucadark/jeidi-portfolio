import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SnapScrollService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private wheelDelta = 0;
  private wheelResetTimer?: number;
  private scrollFrame?: number;
  private scrollAnimating = false;
  private initialized = false;

  private readonly onWheel = (event: WheelEvent): void => {
    if (event.ctrlKey || event.deltaY === 0) return;

    if (this.scrollAnimating) {
      event.preventDefault();
      return;
    }

    const sections = Array.from(
      this.document.querySelectorAll<HTMLElement>('.snap-section')
    );
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const direction = Math.sign(event.deltaY);
    const edgeTolerance = 12;

    const currentIndex = sections.findIndex((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      return scrollY >= top - edgeTolerance && scrollY < bottom - edgeTolerance;
    });

    if (currentIndex < 0) return;

    const current = sections[currentIndex];
    const currentTop = current.offsetTop;
    const currentBottomScroll = currentTop + current.offsetHeight - viewportHeight;
    const isLongSection = current.offsetHeight > viewportHeight + edgeTolerance;

    if (
      isLongSection &&
      ((direction > 0 && scrollY < currentBottomScroll - edgeTolerance) ||
        (direction < 0 && scrollY > currentTop + edgeTolerance))
    ) {
      this.wheelDelta = 0;
      return;
    }

    const targetIndex = currentIndex + direction;
    if (targetIndex < 0 || targetIndex >= sections.length) return;

    event.preventDefault();
    const normalizedDelta = event.deltaMode === WheelEvent.DOM_DELTA_LINE
      ? event.deltaY * 16
      : event.deltaY;
    this.wheelDelta += normalizedDelta;

    window.clearTimeout(this.wheelResetTimer);
    this.wheelResetTimer = window.setTimeout(() => {
      this.wheelDelta = 0;
    }, 180);

    if (Math.abs(this.wheelDelta) < 55) return;

    const target = sections[targetIndex];
    const targetIsLong = target.offsetHeight > viewportHeight + edgeTolerance;
    const targetTop = direction < 0 && targetIsLong
      ? target.offsetTop + target.offsetHeight - viewportHeight
      : target.offsetTop;
    const duration = current.classList.contains('services-section') &&
      target.classList.contains('work-section')
      ? 1600
      : 1050;

    this.wheelDelta = 0;
    this.animateTo(targetTop, duration);
  };

  init(): void {
    if (this.initialized || !isPlatformBrowser(this.platformId)) return;

    this.initialized = true;
    window.addEventListener('wheel', this.onWheel, { passive: false });
  }

  scrollTo(selector: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.document.querySelector<HTMLElement>(selector);
    if (element) {
      const fromServices = selector === '.work-section' &&
        Math.abs(window.scrollY -
          (this.document.querySelector<HTMLElement>('.services-section')?.offsetTop ?? -1)
        ) < 20;
      this.animateTo(element.offsetTop, fromServices ? 1600 : 1050);
    }
  }

  private animateTo(targetTop: number, duration: number): void {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const maxScroll = this.document.documentElement.scrollHeight - window.innerHeight;
    const destination = Math.max(0, Math.min(targetTop, maxScroll));

    if (reduceMotion) {
      window.scrollTo(0, destination);
      return;
    }

    const start = window.scrollY;
    const distance = destination - start;
    if (Math.abs(distance) < 1) return;

    const startTime = performance.now();
    this.scrollAnimating = true;
    this.document.documentElement.classList.add('scroll-snap-animating');

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, start + distance * eased);

      if (progress < 1) {
        this.scrollFrame = requestAnimationFrame(tick);
        return;
      }

      this.scrollAnimating = false;
      this.scrollFrame = undefined;
      this.document.documentElement.classList.remove('scroll-snap-animating');
    };

    this.scrollFrame = requestAnimationFrame(tick);
  }
}
