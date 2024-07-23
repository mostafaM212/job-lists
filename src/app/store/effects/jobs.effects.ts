import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadJobs, loadJobsFailure, loadJobsSuccess } from "../actions/jobs.action";
import { JobsService } from "../../features/jobs/jobs.service";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class JobsEffect {

       constructor(private actionsObs: Actions, private jobsService: JobsService) { }
       loadJobsObs = createEffect(() =>
              this.actionsObs.pipe(
                     ofType(loadJobs),
                     mergeMap(() => this.jobsService.getJobs().pipe(map((data) => loadJobsSuccess(data), catchError((e) => of(loadJobsFailure(e))))))
              ))
}