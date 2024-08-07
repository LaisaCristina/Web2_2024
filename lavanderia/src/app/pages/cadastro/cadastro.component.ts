import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioCadastro } from 'src/app/models/Usuario';
import { AbstractControl, ValidatorFn, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Endereco } from '../../models/Endereco';
import { Usuario } from '../../models//Usuario';

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
  messageType: 'success' | 'error' = 'success';
  notificationMessage: string | null = null;
  notificationType: 'success' | 'error' | 'danger' | 'warning' | 'info' = 'success';

  navigateToLogin() {
    this.router.navigate(['/login']);
  }


  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  //    complemento dos endereços esta como obrigatorio (talvez tirar do formGroup/ nao tratar como campo do formGroup )
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
    event.preventDefault()
    if (this.userForm.invalid) {
      this.showNotification('Por favor, preencha todos os campos corretamente.', 'error');
    } else {
      let enderecoCadastrado = this.getDadosEndereco();
      let userCadstrado = this.getDadosUsuario();

      this.usuarioService.cadastrarUsuario(userCadstrado, enderecoCadastrado).subscribe({
        next: (usuario) => {
          this.showNotification(`Usuário ${usuario.nome} cadastrado com sucesso!`, 'success');
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000); // Redireciona após 2 segundos
        },
        error: () => {
          this.message = 'Erro ao cadastrar usuário.';
          this.messageType = 'error';
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
