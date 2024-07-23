import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Job } from '../../../job';
import { MatDialog } from '@angular/material/dialog';
import { JobDetailsDialogComponent } from '../job-details-dialog/job-details-dialog.component';
import { MyDatePipe } from '../../../my-date.pipe';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
  standalone: true,
  imports: [MatIconModule, CommonModule, JobDetailsDialogComponent, MyDatePipe]
})
export class JobCardComponent implements OnInit {
  job = input<Job>()
  readonly dialog = inject(MatDialog);

  constructor() { }

  ngOnInit() {
  }
  openDialog(): void {
    this.dialog.open(JobDetailsDialogComponent, {
      width: '50%',
      data: { job: this.job() }
    });
  }
}
