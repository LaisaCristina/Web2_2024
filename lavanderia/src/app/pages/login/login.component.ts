import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models/User';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Login } from 'src/app/models/Login';
import { Usuario } from 'src/app/models/Usuario';

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
    event.preventDefault;

    let login: Login = {
      email: this.userForm.get('email')?.value,
      senha: this.userForm.get('senha')?.value
    }
    this.usuarioService.login(login).subscribe({
      next: (usuario: Usuario) => {
        if (usuario) {
          // Usuário autenticado com sucesso, redireciona para /home
          this.router.navigate(['/home']);
        } else {
          // Tratar o caso em que o usuário não é autenticado
          console.error('Autenticação falhou');
        }
      },
      error: (err: HttpErrorResponse) => {
        // Tratar erros de autenticação
        console.error('Erro de autenticação', err);
      }
    });
  }


  cadastro() {
    this.router.navigate(['/cadastro']);
  }
}