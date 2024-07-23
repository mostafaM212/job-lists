import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { jobsReducer } from './store/reducers/jobs.reducer';
import { provideEffects } from '@ngrx/effects';
import { JobsEffect } from './store/effects/jobs.effects';
import { authReducer } from './store/reducers/auth.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore({ jobs: jobsReducer, auth: authReducer }), provideAnimationsAsync(), provideHttpClient(), provideEffects([JobsEffect]), provideToastr()]
};
