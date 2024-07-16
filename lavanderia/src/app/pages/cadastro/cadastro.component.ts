import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidatorFn, FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
import { User } from 'src/app/models/User';
import { Endereco } from 'src/app/models/Endereco';
import { Cliente } from 'src/app/models/Cliente';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{
  users: Cliente | undefined;
  endereco: Endereco | undefined;
  userForm: FormGroup = new FormGroup({});

  constructor( private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.initializeForm();
  }

  //TODO validação das senhas iguais
  //    complemento dos endereços esta como obrigatorio (talvez tirar do formGroup/ nao tratar como campo do formGroup )
  initializeForm(){
    this.userForm = this.formBuilder.group({
      nome: ["",[Validators.required,Validators.maxLength(250)]],
      CPF: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('[0-9]*')]],
      email: ["",[Validators.required,Validators.maxLength(250)]],
      telefone: ["",[Validators.required,Validators.minLength(10),Validators.maxLength(11),Validators.pattern('[0-9]*')]],

      //Endereço
      CEP: ["",[Validators.required,Validators.maxLength(250)]],
      logradouro: ["",[Validators.required,Validators.maxLength(250)]],
      numeroEndereco: ["",[Validators.required,Validators.minLength(1), Validators.pattern('[0-9]*')]],
      complementoEndereco: ["",[Validators.required]],
      bairroEndereco: ["",[Validators.required,Validators.maxLength(60)]],
      cidadeEndereco: ["",[Validators.required,Validators.maxLength(60)]],
      estadoEndereco: ["",[Validators.required,Validators.maxLength(60)]],

      //Senha
      senha: ["",[Validators.required,Validators.minLength(4),Validators.maxLength(4)],Validators.pattern('[0-9]*')],
      senhaConfirm: ["",[Validators.required, Validators.minLength(4),Validators.maxLength(4)],Validators.pattern('[0-9]*')],
    }/*, {
      validator: this.senhaMatchValidator() // Adiciona o validador personalizado aqui
    }*/);

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

  submitForm(event: Event){
    event.preventDefault()
    if (this.userForm.invalid){
      console.log('aaaaaa')
    } else {
      let enderecoCadastrado = this.getDadosEndereco();
      let userCadstrado = this.getDadosUsuario();
      console.log(enderecoCadastrado);
      console.log(userCadstrado);
    }
  }


  senhaMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const senha = control.get('senha');
      const senhaConfirm = control.get('senhaConfirm');
  
      if (senha && senhaConfirm && senha.value !== senhaConfirm.value) {
        return { senhaMismatch: true };
      }
  
      return null;
    };
  }

  getDadosEndereco(): Endereco{
    let enderecoCad: Endereco = {
      idCliente: 1,
      logradouro: this.userForm.get('logradouro')?.value,
      numero: this.userForm.get('numeroEndereco')?.value,
      complemento: this.userForm.get('complementoEndereco')?.value,
      bairro: this.userForm.get('bairroEndereco')?.value,
      cidade: this.userForm.get('cidadeEndereco')?.value,
    }
    return enderecoCad;
  }

  getDadosUsuario(): Cliente{
    let userCad: Cliente = {
      id: 1,
      telefone: this.userForm.get('telefone')?.value,
      nome: this.userForm.get('nome')?.value,
      CPF: this.userForm.get('CPF')?.value,
      email: this.userForm.get('email')?.value,
      senha: this.userForm.get('senha')?.value,
      endereco: 1,
      pedidos: [],
    }
    return userCad;
  }
}
