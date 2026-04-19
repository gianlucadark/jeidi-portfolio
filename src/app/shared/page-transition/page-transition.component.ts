import { Component, input, computed } from '@angular/core';
import { TransitionPhase } from '../../services/navigation.service';

@Component({
  selector: 'app-page-transition',
  standalone: true,
  templateUrl: './page-transition.component.html',
  styleUrl: './page-transition.component.scss'
})
export class PageTransitionComponent {
  phase = input<TransitionPhase>('idle');
}
