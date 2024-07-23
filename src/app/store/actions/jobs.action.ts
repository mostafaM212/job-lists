import { createAction, props } from "@ngrx/store";
import { Job } from "../../features/jobs/job";


export const loadJobs = createAction('[jobs] load jobs')
export const loadJobsSuccess = createAction('[jobs] load jobs successful', props<{ data: any[] }>())
export const loadJobsFailure = createAction('[jobs] load jobs failure', props<{ error: string[] }>())

export const updateJob = createAction('[jobs] update job', props<{ job: Job }>())