import { Component, OnInit } from '@angular/core';
import { UsuarioCadastro } from 'src/app/models/Usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Endereco } from '../../models/Endereco';
import { Usuario } from '../../models//Usuario';
import { EmailService } from '../../services/email.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  users: Usuario | undefined;
  endereco: Endereco | undefined;
  userForm: FormGroup = new FormGroup({});
  message: string = '';
  base_URL = 'http://localhost:8080/auth/register';
  messageType: 'success' | 'error' = 'success';
  notificationMessage: string | null = null;
  notificationType: 'success' | 'error' | 'danger' | 'warning' | 'info' = 'success';

  navigateToLogin() {
    this.router.navigate(['/login']);
  }


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private emailService: EmailService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = this.formBuilder.group({
      nome: ["", [Validators.required, Validators.maxLength(250)]],
      CPF: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('[0-9]*')]],
      email: ["", [Validators.required, Validators.maxLength(250)]],
      telefone: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern('[0-9]*')]],

      //Endereço
      CEP: ["", [Validators.required, Validators.maxLength(250)]],
      logradouro: ["", [Validators.required, Validators.maxLength(250)]],
      numeroEndereco: ["", [Validators.required, Validators.minLength(1), Validators.pattern('[0-9]*')]],
      complementoEndereco: ["", [Validators.required]],
      bairroEndereco: ["", [Validators.required, Validators.maxLength(60)]],
      cidadeEndereco: ["", [Validators.required, Validators.maxLength(60)]],
      estadoEndereco: ["", [Validators.required, Validators.maxLength(60)]],

    });

    // Adiciona listener para permitir apenas números no campo CPF
    this.userForm.get('CPF')?.valueChanges.subscribe((value: string) => {
      const newValue = value.replace(/\D/g, ''); // Remove não dígitos
      this.userForm.get('CPF')?.patchValue(newValue, { emitEvent: false }); // Atualiza valor no campo
    });

    this.userForm.get('CEP')?.valueChanges.subscribe((value: string) => {
      const newValue = value.replace(/\D/g, ''); // Remove não dígitos
      this.userForm.get('CEP')?.patchValue(newValue, { emitEvent: false }); // Atualiza valor no campo
    });

    this.userForm.get('telefone')?.valueChanges.subscribe((value: string) => {
      const newValue = value.replace(/\D/g, ''); // Remove não dígitos
      this.userForm.get('telefone')?.patchValue(newValue, { emitEvent: false }); // Atualiza valor no campo
    });

    this.userForm.get('numeroEndereco')?.valueChanges.subscribe((value: string) => {
      const newValue = value.replace(/\D/g, ''); // Remove não dígitos
      this.userForm.get('numeroEndereco')?.patchValue(newValue, { emitEvent: false }); // Atualiza valor no campo
    });
  }

  submitForm(event: Event) {
    event.preventDefault();

    if (this.userForm.invalid) {
      this.showNotification('Por favor, preencha todos os campos corretamente.', 'error');
    } else {
      const email = this.userForm.get('email')?.value;

      let enderecoCadastrado = this.getDadosEndereco();
      let userCadastrado = this.getDadosUsuario();

      this.http.post(this.base_URL, { email }).subscribe({
        next: (response: any) => {
          this.message = 'Uma senha foi enviada para o seu e-mail.';
          this.router.navigate(['/login']);
        },
        error: (error) => { // Correção na sintaxe do tratamento de erro
          console.error('Erro ao cadastrar', error);
          this.message = 'Erro ao cadastrar. Tente novamente.';
        }
      });
    }
  }

  showNotification(message: string, type: 'success' | 'error' | 'warning' | 'info') {
    this.notificationMessage = message;
    this.notificationType = type;
  }

  clearNotification() {
    this.notificationMessage = null;
  }

  getDadosEndereco(): Endereco {
    let enderecoCad: Endereco = {
      id: 0,
      idCliente: 1,
      logradouro: this.userForm.get('logradouro')?.value,
      numero: this.userForm.get('numeroEndereco')?.value,
      complemento: this.userForm.get('complementoEndereco')?.value,
      bairro: this.userForm.get('bairroEndereco')?.value,
      cidade: this.userForm.get('cidadeEndereco')?.value,
      cep: this.userForm.get('CEP')?.value,

    }
    return enderecoCad;
  }

  getDadosUsuario(): UsuarioCadastro {
    return {
      telefone: this.userForm.get('telefone')?.value,
      nome: this.userForm.get('nome')?.value,
      cpf: this.userForm.get('CPF')?.value,
      email: this.userForm.get('email')?.value,
      idEndereco: 1,
      tipo: 'C'
    };
  }

}











