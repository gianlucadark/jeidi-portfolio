import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'design', loadComponent: () => import('./pages/design/design.component').then(m => m.DesignComponent) },
  { path: 'photo', loadComponent: () => import('./pages/photo/photo.component').then(m => m.PhotoComponent) },
  { path: 'contatti', loadComponent: () => import('./pages/contatti/contatti.component').then(m => m.ContattiComponent) },
  { path: 'brand', loadComponent: () => import('./pages/brand/brand.component').then(m => m.BrandComponent) },
  { path: 'uxui', loadComponent: () => import('./pages/uxui/uxui.component').then(m => m.UxuiComponent) },
  { path: 'socialmedia', loadComponent: () => import('./pages/social-media/social-media.component').then(m => m.SocialMediaComponent) },
  { path: 'ada', loadComponent: () => import('./pages/projects/ada/ada.component').then(m => m.AdaComponent) },
  { path: 'ideate', loadComponent: () => import('./pages/projects/ideate/ideate.component').then(m => m.IdeateComponent) },
  { path: 'riga', loadComponent: () => import('./pages/projects/riga/riga.component').then(m => m.RigaComponent) },
  { path: 'ia', loadComponent: () => import('./pages/projects/ia/ia.component').then(m => m.IaComponent) },
  { path: 'circus', loadComponent: () => import('./pages/projects/circus/circus.component').then(m => m.CircusComponent) },
  { path: 'perlei', loadComponent: () => import('./pages/projects/perlei/perlei.component').then(m => m.PerleiComponent) },
  { path: 'regiro', loadComponent: () => import('./pages/projects/regiro/regiro.component').then(m => m.RegiroComponent) },
  { path: '**', redirectTo: '' },
];
