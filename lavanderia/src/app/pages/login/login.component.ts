import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users: User | undefined;
  userForm: FormGroup = new FormGroup({});

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  initializeForm(){
    this.userForm = this.formBuilder.group({
      nome: ["",Validators.required,Validators.maxLength(250)],
      idade: ["",Validators.required,Validators.min(18)]
    });
  }
  
  login() {
    
    this.router.navigate(['/home']); 
  }

  cadastro() {
    this.router.navigate(['/cadastro']); 
  }
}