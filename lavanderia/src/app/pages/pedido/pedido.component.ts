import { Component, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { ItemPedidoComponent } from '../../components/item-pedido/item-pedido.component';
import { Router } from '@angular/router';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})

export class PedidoComponent {
  @ViewChild('containerItens', { read: ViewContainerRef }) containerItens!: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver, private router: Router) {}

  addPedido() {
    const factory = this.resolver.resolveComponentFactory(ItemPedidoComponent);
    const componentRef = this.containerItens.createComponent(factory);
  }

  home() {
    
    this.router.navigate(['/home']); 
  }
}
