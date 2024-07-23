import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../../service/photo.service';
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css'
})
export class PhotoListComponent  implements OnInit {
  photos: any[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.photoService.getPhotos().subscribe(
      (data: any[]) => {
        this.photos = data;
      },
      error => {
        console.error('Error fetching photos', error);
    // this.photoService.getPhotos().subscribe((data: any[]) => {
    //   this.photos = data;
    });
  }
}
