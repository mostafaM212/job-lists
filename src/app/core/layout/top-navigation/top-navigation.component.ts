import { Component, inject, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../auth/pages/login/login.component';
import { Store } from '@ngrx/store';
import { RegisterComponent } from '../../auth/pages/register/register.component';
import { AuthService } from '../../auth/auth.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
  standalone: true,
  imports: [MatIconModule]
})
export class TopNavigationComponent implements OnInit {
  dialog = inject(MatDialog)
  store = inject(Store)
  isAuth = signal<boolean>(false)
  user = signal<String>('')
  authService = inject(AuthService)
  constructor() { }

  ngOnInit() {
    this.getUserData()
  }
  getUserData() {


    this.store.select('auth').subscribe(data => {
      console.log('🔥', data);
      this.isAuth.set(data.isAuthenticated)
      this.user.set(data.user)

    })
  }
  openLoginDialog() {
    let dialog = this.dialog.open(LoginComponent, {
      width: '50%',

    })
  }
  openRegisterDialog() {
    let dialog = this.dialog.open(RegisterComponent, {
      width: '50%',

    })
  }
}
