import { createAction, props } from "@ngrx/store";




export const loginUser = createAction('[auth] login user in', props<{ email: string }>())
export const logoutUser = createAction('[auth] log user out')
