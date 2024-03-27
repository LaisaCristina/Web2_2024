import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-item-pedido',
  templateUrl: './item-pedido.component.html',
  styleUrls: ['./item-pedido.component.css']
})
export class ItemPedidoComponent {

  qtdIten: Number = 0; // Variável para armazenar o valor do input

  addIten(event: Event){
    event.preventDefault();
  }

  subIten(event: Event){
    event.preventDefault();
  }
}
