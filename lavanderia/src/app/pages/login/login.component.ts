import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
import { User } from 'src/app/models/User';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Login } from 'src/app/models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users: User | undefined;
  userForm: FormGroup = new FormGroup({});


  constructor(private router: Router, private formBuilder: FormBuilder, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.userForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.maxLength(250)]],
      senha: ["", [Validators.required, Validators.maxLength(250)]]
    });
  }
  
  login(event: Event) {
    let login: Login = {
      email: this.userForm.get('email')?.value,
      senha: this.userForm.get('senha')?.value
    }
    this.usuarioService.login(login);
    this.router.navigate(['/home']); 
  }

  cadastro() {
    this.router.navigate(['/cadastro']); 
  }
}