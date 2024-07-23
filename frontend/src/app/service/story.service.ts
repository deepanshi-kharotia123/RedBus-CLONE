import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from '../config';
@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private baseUrl = 'https://testredbus.onrender.com/stories'
  constructor(private http: HttpClient) { }

  getStories(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createStory(story: any): Observable<any> {
    return this.http.post(this.baseUrl, story);
  }

  updateStory(id: string, story: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, story);
  }

  deleteStory(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
