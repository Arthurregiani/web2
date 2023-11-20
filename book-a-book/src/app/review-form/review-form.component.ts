// review-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css'],
})
export class ReviewFormComponent {
  titulo: string = ''; 
  review: string = ''; 

  onFileSelected(event: any): void {
    // Lógica para lidar com a seleção de arquivo
  }

  submitReview(): void {

  }
}
