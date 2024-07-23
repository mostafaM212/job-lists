import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadJobs } from './store/actions/jobs.action';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'job-listing';
  store = inject(Store)
  authService = inject(AuthService)

  ngOnInit(): void {
    this.store.dispatch(loadJobs())
    this.authService.autoAuthUser()
  }
}
