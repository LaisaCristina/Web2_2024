import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  private base_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  sendEmail(to: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.base_URL}/send-email`, { to, password });
  }
}
