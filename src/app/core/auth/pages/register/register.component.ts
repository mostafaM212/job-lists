import { Component, inject, OnInit, output } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule]

})
export class RegisterComponent {

  fb = inject(UntypedFormBuilder)
  toastr = inject(ToastrService)
  dialogRef = inject(MatDialogRef<LoginComponent>);

  registerForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  })

  save() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched()
      return
    }
    this.dialogRef.close()
    this.toastr.success('you have register successfully', 'Success')
  }

}
