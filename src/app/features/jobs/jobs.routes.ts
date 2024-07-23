import { Routes } from '@angular/router';

export const jobsRoutes: Routes = [
       {
              path: '',
              redirectTo: 'jobs',
              pathMatch: 'prefix'
       },
       {
              path: 'jobs',
              loadComponent: () => import('./pages/jobs/jobs.component').then(c => c.JobsComponent)
       }
];
