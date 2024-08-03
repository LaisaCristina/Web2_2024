import { Component } from '@angular/core';
import { PecaRoupa } from '../models/PecaRoupa';
import { PecaRoupaService } from '../services/peca-roupa.service';
import { AbstractControl, ValidatorFn, FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-roupas',
  templateUrl: './cadastro-roupas.component.html',
  styleUrls: ['./cadastro-roupas.component.css']
})
export class CadastroRoupasComponent {
  imagemSelecionada: File | null = null;
  imagemBase64: string | null = null;
  userForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private roupaService: PecaRoupaService,
  ) { }  

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.userForm = this.formBuilder.group({
      descricao: ["",[Validators.required,Validators.maxLength(250)]],
      preco: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10), Validators.pattern('^[0-9]+[.,]?[0-9]*$')]],
      prazo: ["",[Validators.required,Validators.maxLength(250)]],
    });

    // Adiciona listener para permitir apenas números no campo Prazo
    this.userForm.get('prazo')?.valueChanges.subscribe((value: string) => {
      let newValue = value.replace(/\D/g, ''); // Remove não dígitos
      this.userForm.get('prazo')?.patchValue(newValue, { emitEvent: false }); // Atualiza valor no campo
    });

    // Adiciona listener para permitir apenas números e '.' ',' no campo preco
    this.userForm.get('preco')?.valueChanges.subscribe((value: string) => {
      let newValue = value.replace(/[^0-9.,]/g, '');
      this.userForm.get('preco')?.patchValue(newValue, { emitEvent: false }); // Atualiza valor no campo
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.imagemSelecionada = file;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagemBase64 = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  enviarCadastro(event: Event) {
    let roupa: PecaRoupa;
    if (this.userForm.invalid){
      console.log('aaaaaa') //TODO trocar isso por uma modal de warning
    } else {
      let roupaCadastro = this.getRoupaCadastro();
      console.log(roupaCadastro);
      if (roupaCadastro !== null){
        this.roupaService.cadastrarRoupa(roupaCadastro).subscribe(
                                                        (roupa) => {
                                                          // this.mensagem = `Usuário ${usuario.nome} cadastrado com sucesso!`;
                                                          // this.usuario = { id: 0, nome: '', email: '' }; // Resetar o formulário
                                                        },
                                                        // (erro) => this.mensagem = 'Erro ao cadastrar usuário'
                                                      );
      }
    }
  }

  getRoupaCadastro(): PecaRoupa | null{
    let roupaCad: PecaRoupa = {
      id: 0,
      descricao: this.userForm.get('descricao')?.value,
      preco: this.userForm.get('preco')?.value,
      prazo: this.userForm.get('prazo')?.value,
      imagem: 'aaa'
    }
    if (this.imagemBase64) {
      roupaCad.imagem = this.imagemBase64.toString();
    } else {
      //TODO Warning de não tem imagem
      return null;
    }

    return roupaCad;
  }
}
