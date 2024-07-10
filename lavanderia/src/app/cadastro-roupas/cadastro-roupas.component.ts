import { Component } from '@angular/core';


@Component({
  selector: 'app-cadastro-roupas',
  templateUrl: './cadastro-roupas.component.html',
  styleUrls: ['./cadastro-roupas.component.css']
})
export class CadastroRoupasComponent {
  imagemSelecionada: File | null = null;
  imagemBase64: string | null = null;


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
      console.log("Imagem em base64:", this.imagemBase64);
      this.imagemBase64 = null;
    }
  }

}
