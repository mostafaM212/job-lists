import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUser, logoutUser } from '../../store/actions/auth.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  store = inject(Store)

  loginUser(email: string) {
    localStorage.setItem('email', email)
    this.store.dispatch(loginUser({ email }))
  }
  logoutUser() {
    localStorage.removeItem('email')
    this.store.dispatch(logoutUser())
  }
  autoAuthUser() {
    let userEmail = localStorage.getItem('email')
    if (userEmail !== null) {
      this.store.dispatch(loginUser({ email: userEmail }))
    }
  }
}
