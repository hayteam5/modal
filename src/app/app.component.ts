import {Component} from '@angular/core';
import {MatDialogRef, MatDialog, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ModalComponent} from "./modal/modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title?: string
  description?: string

  constructor (public dialog: MatDialog) {}

  showModal(): void {
    const dialogRef = this.dialog.open(ModalComponent,{
      width: '300px',
      data: {title: this.title, description: this.description}
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed')
    })
  }
}
