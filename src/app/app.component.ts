import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "./modal/modal.component";
import {EditComponent} from "./edit/edit.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title!: string
  description!: string
  posts: { title: string, description: string }[] = []

  constructor(public dialog: MatDialog) {
  }

  showModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '300px',
      minHeight: '200px',
      data: {title: this.title = '', description: this.description = ''}
    })

    dialogRef.afterClosed().subscribe(result => {
      this.title = result.title
      this.description = result.description
      this.posts.push(result)
    })
  }

  onEdit(index: number) {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '300px',
      minHeight: '200px',
      data: {title: this.title = this.posts[index].title, description: this.description = this.posts[index].description}
    })

    dialogRef.afterClosed().subscribe(result => {
      this.posts[index].title = result.title
      this.posts[index].description = result.description
    })
  }

  onDelete(index: number) {
    this.posts.splice(index, 1)
  }
}
