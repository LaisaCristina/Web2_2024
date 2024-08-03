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

  this.compressImage(file, 800, 800, 0.7).then((compressedImage) => {
    this.imagemBase64 = compressedImage;
  }).catch(error => {
    console.error('Error compressing image', error);
  });
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

  compressImage(file: File, maxWidth: number, maxHeight: number, quality: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
  
          if (!ctx) {
            reject(new Error('Failed to get 2D context'));
            return;
          }
  
          let width = img.width;
          let height = img.height;
  
          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }
  
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
  
          canvas.toBlob(
            (blob) => {
              if (blob) {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = () => {
                  resolve(reader.result as string);
                };
                reader.onerror = (error) => reject(error);
              } else {
                reject(new Error('Blob creation failed'));
              }
            },
            'image/jpeg',
            quality
          );
        };
        img.onerror = (error) => reject(error);
      };
      reader.onerror = (error) => reject(error);
    });
  }  
}
