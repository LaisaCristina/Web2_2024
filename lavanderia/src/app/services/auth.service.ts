import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userType: 'cliente' | 'funcionario' | null = null;

  setUserType(type: 'cliente' | 'funcionario') {
    this.userType = type;
  }

  getUserType(): 'cliente' | 'funcionario' | null {
    return this.userType;
  }
}
