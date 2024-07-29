import { Component } from '@angular/core';

export interface ClothingItem {
  name: string;
  imageUrl?: string;
  price: string;
  deliveryTime: string;
}

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
})
export class EmployeeCrudComponent {
  listaVazia: boolean = false;
  selectedItem: ClothingItem | null = null;
  selectedIndex: number | null = null;

  novoItem: ClothingItem = {
    name: '',
    imageUrl: '',
    price: '',
    deliveryTime: '',
  };

  itemEmEdicao: ClothingItem | null = null;

  clothingItems: ClothingItem[] = [
    {
      name: 'Camiseta',
      imageUrl:
        'https://static.netshoes.com.br/produtos/camiseta-ssb-brand-masculina-lisa-basica-100-algodao/16/70P-0003-016/70P-0003-016_zoom1.jpg?ts=1636498346&ims=544x',
      price: 'R$ 5.00',
      deliveryTime: '4 horas',
    },
    {
      name: 'Camiseta',
      imageUrl:
        'https://static.netshoes.com.br/produtos/camiseta-ssb-brand-masculina-lisa-basica-100-algodao/16/70P-0003-016/70P-0003-016_zoom1.jpg?ts=1636498346&ims=544x',
      price: 'R$ 5.00',
      deliveryTime: '4 horas',
    },
    {
      name: 'Camiseta',
      imageUrl:
        'https://static.netshoes.com.br/produtos/camiseta-ssb-brand-masculina-lisa-basica-100-algodao/16/70P-0003-016/70P-0003-016_zoom1.jpg?ts=1636498346&ims=544x',
      price: 'R$ 5.00',
      deliveryTime: '4 horas',
    },
  ];

  adicionarNovoItem() {
    if (
      this.novoItem.name &&
      this.novoItem.price &&
      this.novoItem.deliveryTime
    ) {
      this.clothingItems.push({ ...this.novoItem });
      this.cleanForm();
      this.listaVazia = this.clothingItems.length === 0;
    }
  }

  updateItem() {
    if (this.itemEmEdicao) {
      const index = this.clothingItems.findIndex(
        (item) => item === this.itemEmEdicao
      );
      if (index !== -1) {
        this.clothingItems[index] = { ...this.novoItem };
        this.itemEmEdicao = null;
      }
    }
    this.cleanForm();
  }

  editItem(item: ClothingItem) {
    this.itemEmEdicao = item;
    this.novoItem = { ...item };
  }

  removeItem(item: ClothingItem) {
    const index = this.clothingItems.indexOf(item);
    if (index !== -1) {
      this.clothingItems.splice(index, 1);
    }
    this.listaVazia = this.clothingItems.length === 0;
  }

  cleanForm() {
    this.itemEmEdicao = null;
    this.novoItem = {
      name: '',
      imageUrl: '',
      price: '',
      deliveryTime: '',
    };
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.novoItem.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
