import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  size = input(74);
  color = input('var(--ink)');

  get height() { return () => this.size() * (52 / 74); }
  get chevronW() { return () => this.size() * 0.35; }
}
