import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from '../config';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl: string = url+'stories';
  constructor(private http: HttpClient) { }

getTravelStories(): Observable<any> {
  return this.http.get(`${this.apiUrl}`);
}
addTravelStory(story: any): Observable<any> {
  return this.http.post(`${this.apiUrl}`, story);
}
}