import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-roupas',
  templateUrl: './cadastro-roupas.component.html',
  styleUrls: ['./cadastro-roupas.component.css']
})
export class CadastroRoupasComponent {
  imagemSelecionada: File | null = null;
  imagemBase64: string | null = null;
  applyForm = new FormGroup({
    nome: new FormControl(''),
    prazo: new FormControl(''),
    preco: new FormControl('')
  })

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.imagemSelecionada = file;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagemBase64 = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  enviarCadastro() {
    if (this.imagemBase64) {
      // Aqui você enviaria this.imagemBase64 para o backend para salvar no banco de dados
      console.log("Imagem em base64:", this.imagemBase64);
      // Lembre-se de limpar this.imagemBase64 após salvá-la no backend, se necessário
      this.imagemBase64 = null;
    }
  }

}
