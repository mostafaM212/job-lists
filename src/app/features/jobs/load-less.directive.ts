import { Directive, HostListener, inject, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadJobs } from '../../store/actions/jobs.action';
import { JobsService } from './jobs.service';

@Directive({
  selector: '[appLoadLess]',
  standalone: true
})
export class LoadLessDirective {

  jobsService = inject(JobsService)
  store = inject(Store)
  requestedNumber = input(11)
  constructor() { }

  @HostListener('click')
  loadLessJobs() {
    if (this.requestedNumber() - 11 > 0) {
      this.jobsService.perPage.set(this.requestedNumber() - 11)
      this.store.dispatch(loadJobs())
    }
  }
}
