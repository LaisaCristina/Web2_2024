import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lavanderia';
  userType: 'cliente' | 'funcionario' | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userType = this.authService.getUserType();
  }
}
