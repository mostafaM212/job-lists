import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { finalize, tap } from 'rxjs';
import { Job } from './job';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  backendUrl = environment.backendUrl
  perPage = signal<number>(11)
  http = inject(HttpClient)
  store = inject(Store)
  spinner = inject(NgxSpinnerService)
  getJobs(perPage = 11) {
    this.spinner.show()
    return this.http.get<{ data: Job[] }>(this.backendUrl + this.perPage()).pipe(finalize(() => {
      this.spinner.hide()
    }))

  }
}
