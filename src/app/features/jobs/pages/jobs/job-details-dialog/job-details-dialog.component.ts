import { CommonModule } from '@angular/common';
import { Component, Inject, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Job } from '../../../job';
import { Store } from '@ngrx/store';
import { updateJob } from '../../../../../store/actions/jobs.action';
import { JobApplyFormComponent } from './job-apply-form/job-apply-form.component';
import { ToastrService } from 'ngx-toastr';
import { MyDatePipe } from '../../../my-date.pipe';

@Component({
  selector: 'app-job-details-dialog',
  templateUrl: './job-details-dialog.component.html',
  styleUrls: ['./job-details-dialog.component.scss'],
  standalone: true,
  imports: [MatIconModule, CommonModule, MatDialogClose, JobApplyFormComponent, MyDatePipe]
})
export class JobDetailsDialogComponent implements OnInit {
  store = inject(Store)
  dialogRef = inject(MatDialogRef<JobDetailsDialogComponent>);
  showApplyForm: boolean = false
  job: WritableSignal<Job | null> = signal<Job | null>(null)
  toastr = inject(ToastrService)
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {
    if (this.data) {
      console.log('🔥data', this.data);

      this.job.set(this.data.job)
    }
  }
  save() {
    let newJob: Job = { ...this.job(), saved: true } as Job
    this.job.set(newJob)
    this.toastr.success('info is saved successfully', 'Success')
    this.dispatchJob()
  }
  apply() {
    let newJob: Job = { ...this.job(), applied: true } as Job
    this.job.set(newJob)
    this.dispatchJob()

  }
  dispatchJob() {
    this.store.dispatch(updateJob({ job: this.job() as Job }))
  }
}
