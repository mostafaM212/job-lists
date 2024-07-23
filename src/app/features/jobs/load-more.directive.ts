import { Directive, HostListener, inject, input } from '@angular/core';
import { JobsService } from './jobs.service';
import { Store } from '@ngrx/store';
import { loadJobs } from '../../store/actions/jobs.action';

@Directive({
  selector: '[appLoadMore]',
  standalone: true
})
export class LoadMoreDirective {
  jobsService = inject(JobsService)
  store = inject(Store)
  requestedNumber = input(11)


  @HostListener('click')
  loadMoreJobs() {
    this.jobsService.perPage.set(this.requestedNumber() + 11)
    this.store.dispatch(loadJobs())
  }
}
