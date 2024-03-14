import { Component, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { ItemPedidoComponent } from '../../item-pedido/item-pedido.component';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})

export class PedidoComponent {
  @ViewChild('containerItens', { read: ViewContainerRef }) containerItens!: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {}

  addPedido() {
    const factory = this.resolver.resolveComponentFactory(ItemPedidoComponent);
    const componentRef = this.containerItens.createComponent(factory);
  }
}
