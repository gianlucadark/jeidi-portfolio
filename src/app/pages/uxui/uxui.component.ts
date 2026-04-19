import { Component, inject } from '@angular/core';
import { BlobsComponent } from '../../shared/blobs/blobs.component';
import { CornerLogoComponent } from '../../shared/corner-logo/corner-logo.component';
import { CircleArrowComponent } from '../../shared/circle-arrow/circle-arrow.component';
import { BrandProjectCardComponent } from '../../shared/brand-project-card/brand-project-card.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MouseService } from '../../services/mouse.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-uxui',
  standalone: true,
  imports: [BlobsComponent, CornerLogoComponent, CircleArrowComponent, BrandProjectCardComponent, FooterComponent],
  templateUrl: './uxui.component.html',
  styleUrl: './uxui.component.scss'
})
export class UxuiComponent {
  mouseService = inject(MouseService);
  nav = inject(NavigationService);
}
