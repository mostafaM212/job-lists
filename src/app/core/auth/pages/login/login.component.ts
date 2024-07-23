import { Component, inject, OnInit, output } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule]
})
export class LoginComponent {

  fb = inject(UntypedFormBuilder)
  toastr = inject(ToastrService)
  authService = inject(AuthService)
  dialogRef = inject(MatDialogRef<LoginComponent>);
  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  })

  save() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
      return
    }
    this.authService.loginUser(this.loginForm.value.email)
    this.dialogRef.close()
    this.toastr.success('you have logged in successfully', 'Success')
  }


}
