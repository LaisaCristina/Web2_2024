import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { ItemPedidoComponent } from './item-pedido/item-pedido.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})

export class PedidoComponent {
  @ViewChild('containerItens', { read: ViewContainerRef }) containerItens!: ViewContainerRef;
  constructor(private router: Router) {}

  addPedido() {
    const componentRef = this.containerItens.createComponent(ItemPedidoComponent);
  }

  confirmarPedido(){

  }

  home() {
    
    this.router.navigate(['/home']); 
  }
}
