import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private base_URL = 'http://localhost:8080';
  private userType: 'cliente' | 'funcionario' | null = null;


  constructor(private http: HttpClient) { }

  register(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.base_URL}/register`, { email, password });
  }


  setUserType(type: 'cliente' | 'funcionario') {
    this.userType = type;
  }

  getUserType(): 'cliente' | 'funcionario' | null {
    return this.userType;
  }
}
