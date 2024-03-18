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
    const componentRef = this.containerItens.createComponent(ItemPedidoComponent);
  }

  confirmarPedido(){

  }
}
