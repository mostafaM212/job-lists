import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { JobsService } from '../../jobs.service';
import { Subject } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { loadJobs } from '../../../../store/actions/jobs.action';
import { Job } from '../../job';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobCardComponent } from './job-card/job-card.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoadMoreDirective } from '../../load-more.directive';
import { LoadLessDirective } from '../../load-less.directive';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  standalone: true,
  imports: [MatIconModule, CommonModule, FormsModule, JobCardComponent, LoadMoreDirective, LoadLessDirective]
})
export class JobsComponent implements OnInit {
  jobsService = inject(JobsService)
  store = inject(Store)
  spinner = inject(NgxSpinnerService)

  jobs = signal<Job[]>([])
  search = signal<string>('')
  searchedJobs = computed<Job[]>(() => {
    let filteredJobs: Job[] = []

    this.jobs().forEach(job => {
      if (job.title.toLocaleLowerCase().includes(this.search().toLocaleLowerCase()) && this.search().length) {
        filteredJobs.push(job)
      }
    })
    return filteredJobs
  })
  ngOnInit() {
    this.getJobs()
  }
  getJobs() {
    this.store.select('jobs')
      .subscribe(data => {
        this.jobs.set(data.data)
      })
  }
  // loadMoreJobs() {
  //   this.jobsService.perPage.set(this.jobs().length + 11)
  //   this.store.dispatch(loadJobs())
  // }


}
