import { Component } from '@angular/core';
import { PecaRoupa } from 'src/app/models/PecaRoupa';
import { PecaRoupaService } from 'src/app/services/peca-roupa.service';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
})
export class EmployeeCrudComponent {
  listaVazia: boolean = false;
  selectedItem: PecaRoupa | null = null;
  selectedIndex: number | null = null;
  clothingItems: PecaRoupa[] = Array();


  constructor(
    private pecaRoupaService: PecaRoupaService,
  ) { }  
  
  ngOnInit(): void {
    this.pecaRoupaService.getPecaRoupas().subscribe(
      (data) => {
        console.log('Peças de roupa obtidas com sucesso:');
        console.log(data);
        this.clothingItems = data;
      },
      (error) => {
        console.error('Erro ao obter as peças de roupa:');
        console.error(error);
      }
    );
  }


  novoItem: PecaRoupa = {
    id: 0,
    descricao: '',
    preco: 0,
    prazo: 0,
    imagem: '',
  };

  itemEmEdicao: PecaRoupa | null = null;

  // adicionarNovoItem() {
  //   if (
  //     this.novoItem.descricao &&
  //     this.novoItem.preco &&
  //     this.novoItem.prazo
  //   ) {
  //     this.clothingItems.push({ ...this.novoItem });
  //     this.cleanForm();
  //     this.listaVazia = this.clothingItems.length === 0;
  //   }
  // }

  adicionarNovoItem(event: Event) {
    let roupa: PecaRoupa;
    // if (this.userForm.invalid){
    if (false){
      console.log('aaaaaa') //TODO trocar isso por uma modal de warning
    } else {
      console.log(this.novoItem);
      if (this.novoItem !== null){
        this.pecaRoupaService.cadastrarRoupa(this.novoItem).subscribe(
                                                        (roupa) => {
                                                          // this.mensagem = `Usuário ${usuario.nome} cadastrado com sucesso!`;
                                                          // this.usuario = { id: 0, nome: '', email: '' }; // Resetar o formulário
                                                        },
                                                        // (erro) => this.mensagem = 'Erro ao cadastrar usuário'
                                                      );
      }
    }
  }


  updateItem() {

    if (false){
      console.log('aaaaaa') //TODO trocar isso por uma modal de warning
    } else {
      if (this.novoItem !== null){
        this.pecaRoupaService.updatePecaRoupa(this.novoItem).subscribe(
                                                        (roupa) => {
                                                          const index = this.clothingItems.findIndex(
                                                            (item) => item === this.itemEmEdicao
                                                          );
                                                          if (index !== -1) {
                                                            this.clothingItems[index] = { ...this.novoItem };
                                                            this.itemEmEdicao = null;
                                                          }
                                                          this.cleanForm();
                                                        },
                                                        // (erro) => this.mensagem = 'Erro ao cadastrar usuário'
                                                      );
      }
    }


  }

  editItem(item: PecaRoupa) {
    this.itemEmEdicao = item;
    this.novoItem = { ...item };
  }

  removeItem(item: PecaRoupa) {
    const index = this.clothingItems.indexOf(item); 
    if (index !== -1) {
      this.pecaRoupaService.deletePecaRoupa(item.id).subscribe({
        next: (response) => {
          console.log('Peça de roupa deletada com sucesso:', response);
          this.clothingItems.splice(index, 1);
          this.listaVazia = this.clothingItems.length === 0;
          alert(response.message || 'Peça de roupa deletada com sucesso!');
        },
        error: (error) => {
          console.error('Erro ao deletar a peça de roupa:', error.message);
          alert('Falha ao deletar a peça de roupa. Por favor, tente novamente.');
        }
      });
    }
  }

  cleanForm() {
    this.itemEmEdicao = null;
    this.novoItem = {
      id: 0,
      descricao: '',
      preco: 0,
      prazo: 0,
      imagem: '',
    };
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.novoItem.imagem = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}