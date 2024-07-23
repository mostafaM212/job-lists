import { Component, inject, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatDialogClose]
})
export class ConfirmationDialogComponent implements OnInit {
  message: string = 'Are you sure to confirm ?'
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  dialogRef = inject(MatDialogRef<ConfirmationDialogComponent>)
  ngOnInit() {
    if (this.data.message) {
      this.message = this.data.message
    }
  }
  save() {
    this.dialogRef.close({ result: true })
  }
}
