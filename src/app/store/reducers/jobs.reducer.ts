import { createReducer, on, props } from '@ngrx/store';
import { Job } from "../../features/jobs/job";
import { loadJobsSuccess, updateJob } from "../actions/jobs.action";

export interface JobsStore {
       data: Job[],
}
export const initialState: { data: Job[] } = {
       data: []
}
export const jobsReducer = createReducer(initialState, on(loadJobsSuccess, (state, props) => {
       return {
              ...state, data: props.data
       }
}), on(updateJob, ((state, props) => {
       let newState: Job[] = []
       state.data.forEach((job) => {
              if (job.id === props.job.id) {
                     newState.push(props.job)
              } else {
                     newState.push(job)
              }
       })
       return {
              ...state, data: [...newState]
       }
})))