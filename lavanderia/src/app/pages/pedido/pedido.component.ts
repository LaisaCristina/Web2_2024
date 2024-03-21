import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { ItemPedidoComponent } from './item-pedido/item-pedido.component';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})

export class PedidoComponent {
  @ViewChild('containerItens', { read: ViewContainerRef }) containerItens!: ViewContainerRef;

  addPedido() {
    this.containerItens.createComponent(ItemPedidoComponent);
  }

  confirmarPedido(){
    for (let i = 0; i < this.containerItens.length; i++) {
      console.log(this.containerItens.get(i));
    }
  }

  teste(){

  }
}
