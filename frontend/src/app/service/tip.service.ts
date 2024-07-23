import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TipService {
  //private baseUrl = 'https://redbusclone-mean-1.onrender.com/tips';
private baseUrl = 'https://testredbus.onrender.com/tips'
  constructor(private http: HttpClient) { }
  getTips(): Observable<any> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createTip(tip: any): Observable<any> {
    return this.http.post(this.baseUrl, tip);
  }

  updateTip(id: string, tip: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, tip);
  }

  deleteTip(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
