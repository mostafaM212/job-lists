import { createReducer, on } from "@ngrx/store";
import { loginUser, logoutUser } from "../actions/auth.action";

export interface AuthStore {
       isAuthenticated: boolean;
       user: string
}
export const initialState: AuthStore = {
       isAuthenticated: false,
       user: ''
}
export const authReducer = createReducer(initialState, on(loginUser, (state, props) => {
       return {
              ...state, isAuthenticated: true, user: props.email
       }
}), on(logoutUser, ((state, props) => {

       return {
              ...state, isAuthenticated: false, user: ''
       }
})))