import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../../../service/photo.service';
@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrl: './photo-form.component.css'
})
export class PhotoFormComponent {
  photo = {
    description: '',
    author: ''
  };
  selectedFile: File | null = null;

  constructor(private photoService: PhotoService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      formData.append('description', this.photo.description);
      formData.append('author', this.photo.author);

      this.photoService.uploadPhoto(formData).subscribe(response => {
        console.log('Photo uploaded successfully!', response);
      }, error => {
        console.error('Error uploading photo', error);
      });
    }
  }
}

