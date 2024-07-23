import { Routes } from '@angular/router';
import { jobsRoutes } from './features/jobs/jobs.routes';

export const routes: Routes = [
       {
              path: '',
              loadComponent: () => import('./core/layout/layout.component').then(c => c.LayoutComponent),
              children: jobsRoutes
       }
];
