import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
import { User } from 'src/app/models/User';
import { Endereco } from 'src/app/models/Endereco';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{
  users: User | undefined;
  endereco: Endereco | undefined;
  userForm: FormGroup = new FormGroup({});

  constructor( private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.initializeForm();
  }

  //TODO alterar os campos , deixar eles com tipo e validação corretas
  //Verificar no Front também
  initializeForm(){
    this.userForm = this.formBuilder.group({
      nome: ["",Validators.requiredTrue,Validators.maxLength(250)],
      CPF: ["",Validators.requiredTrue,Validators.maxLength(250)],
      email: ["",Validators.requiredTrue,Validators.maxLength(250)],
      telefone: ["",Validators.requiredTrue,Validators.maxLength(250)],

      //Endereço
      CEP: ["",Validators.requiredTrue,Validators.maxLength(250)],
      logradouro: ["",Validators.requiredTrue,Validators.maxLength(250)],
      numeroEndereco: ["",Validators.requiredTrue,Validators.maxLength(250)],
      complementoEndereco: ["",Validators.requiredTrue,Validators.maxLength(250)],
      bairroEndereco: ["",Validators.requiredTrue,Validators.maxLength(250)],
      cidadeEndereco: ["",Validators.requiredTrue,Validators.maxLength(250)],
      estadoEndereco: ["",Validators.requiredTrue,Validators.maxLength(250)],

      //Senha
      senha: ["",Validators.requiredTrue,Validators.maxLength(250)],
      senhaConfirm: ["",Validators.requiredTrue,Validators.maxLength(250)],
    });
  }

  submitForm(event: Event){
    event.preventDefault()
    console.log(this.userForm.value)
  }
}
