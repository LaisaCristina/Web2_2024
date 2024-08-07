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
  userForm: FormGroup = new FormGroup({});
  message: string = '';
  messageType: 'success' | 'error' = 'success';

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
    event.preventDefault();

    let login: Login = {
      email: this.userForm.get('email')?.value,
      senha: this.userForm.get('senha')?.value
    }
    this.usuarioService.login(login).subscribe({
      next: (usuario: Usuario) => {
        if (usuario) {
          this.showMessage('Login realizado com sucesso!', 'success');
          setTimeout(() => this.router.navigate(['/home']), 2000); // Aguarda 2 segundos antes de redirecionar
        } else {
          this.showMessage('Autenticação falhou. Usuário ou senha incorretos.', 'error');
        }
      },
      error: (err: HttpErrorResponse) => {
        this.showMessage('Erro de autenticação.', 'error');
        console.error('Erro de autenticação', err);
      }
    });
  }

  showMessage(message: string, type: 'success' | 'error') {
    this.message = message;
    this.messageType = type;
    setTimeout(() => {
      this.message = ''; // Limpa a mensagem após 3 segundos
    }, 3000);
  }

  cadastro() {
    this.router.navigate(['/cadastro']);
  }
}
