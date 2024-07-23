import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private baseUrl = 'https://testredbus.onrender.com/forums';
  constructor(private http: HttpClient) { }
  getForums(): Observable<any> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getForum(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createForum(forum: any): Observable<any> {
    return this.http.post(this.baseUrl, forum);
  }

  addPost(forumId: string, post: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${forumId}/posts`, post);
  }
}
