import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-func',
  templateUrl: './nav-bar-func.component.html',
  styleUrls: ['./nav-bar-func.component.css']
})
export class NavBarFuncComponent {
  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

}
