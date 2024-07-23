// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
// export class PhotoService {
//   private baseUrl = 'http://localhost:5000/photos';

//   constructor(private http: HttpClient) { }
//   getPhotos(): Observable<any> {
//     return this.http.get(this.baseUrl);
//   }

//   createPhoto(photo: any): Observable<any> {
//     return this.http.post(this.baseUrl, photo);
//   }

//   updatePhoto(id: string, photo: any): Observable<any> {
//     return this.http.put(`${this.baseUrl}/${id}`, photo);
//   }

//   deletePhoto(id: string): Observable<any> {
//     return this.http.delete(`${this.baseUrl}/${id}`);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'https://testredbus.onrender.com/api/photos';

  constructor(private http: HttpClient) {}

  uploadPhoto(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

getPhotos(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}}