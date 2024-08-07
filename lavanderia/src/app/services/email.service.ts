import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  private apiUrl = 'URL_DO_SEU_BACKEND';

  constructor(private http: HttpClient) { }

  sendEmail(to: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/send-email`, { to, password });
  }
}
