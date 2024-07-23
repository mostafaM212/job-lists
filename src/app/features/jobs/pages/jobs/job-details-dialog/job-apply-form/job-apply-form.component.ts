import { Component, inject, OnInit, output } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogComponent } from '../../../../../../shared/confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-job-apply-form',
  templateUrl: './job-apply-form.component.html',
  styleUrls: ['./job-apply-form.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule]
})
export class JobApplyFormComponent implements OnInit {

  fb = inject(UntypedFormBuilder)
  toastr = inject(ToastrService)
  readonly dialog = inject(MatDialog);
  onBackClick = output()
  onApplyClick = output()
  applyForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    country: ['', [Validators.required]],
    education: ['', [Validators.required]],
    company: ['', [Validators.required]],
    currentPosition: ['', [Validators.required]],
    cv: ['', [Validators.required]],
    cover: ['', [Validators.required]],

  })
  ngOnInit() {
  }
  openDialog(): void {
    let dialog = this.dialog.open(ConfirmationDialogComponent, {
      width: '30%',
      height: '30%',
      data: { message: 'Are your want to confirm ?' }
    });
    dialog.afterClosed().subscribe(data => {
      if (data.result) {
        this.save()
      }
    })
  }
  save() {
    if (this.applyForm.invalid) {
      this.applyForm.markAllAsTouched()
      return
    }
    this.onApplyClick.emit()
    this.onBackClick.emit()
    this.toastr.success('you have applied successfully', 'Success')
  }
  onAddFile(input: HTMLInputElement, mode = 'cv') {
    let file: File = (input.files as FileList)[0]
    console.log('🔥file', file);

    if (file && file.size < 3000000) {
      console.log('🔥', file.name, file);

      if (mode == 'cv') {
        this.applyForm.patchValue({
          cv: file.name
        })
      } else {
        this.applyForm.patchValue({
          cover: file.name
        })
      }
    } else {
      if (mode == 'cv') {
        this.applyForm.get('cv')?.setErrors({ required: true })
      } else {
        this.applyForm.get('cover')?.setErrors({ required: true })

      }
      this.toastr.error('that file is more than 3mb')
    }

  }
}
