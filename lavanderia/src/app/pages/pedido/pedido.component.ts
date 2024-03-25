import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { ItemPedidoComponent } from './item-pedido/item-pedido.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
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
    this.containerItens.createComponent(ItemPedidoComponent);
  }

  confirmarPedido(){
    for (let i = 0; i < this.containerItens.length; i++) {
      console.log(this.containerItens.get(i));
    }
  }

  teste(){

  }

  home() {
    
    this.router.navigate(['/home']); 
  }
}
