import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewFormComponent } from '../review-form/review-form.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private dialog: MatDialog) {}

  openReviewForm(): void {
    const dialogRef = this.dialog.open(ReviewFormComponent, {
      width: '500px', // Defina o tamanho do popup conforme necessário
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Formulário fechado', result);
    });
  }
}
