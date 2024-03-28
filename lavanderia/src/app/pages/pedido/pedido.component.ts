import { Component, ViewContainerRef, ViewChild, ComponentRef } from '@angular/core';
import { ItemPedidoComponent } from './item-pedido/item-pedido.component';
import { ModalConfirmacaoComponent } from './modal-confirmacao/modal-confirmacao.component';
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

  isConfirmationModalVisible: boolean = false;
  private itensComponent: ComponentRef<ItemPedidoComponent>[] = [];

  addPedido() {
    const teste = this.containerItens.createComponent(ItemPedidoComponent);
    this.itensComponent.push(teste);
  }

  confirmarPedido(){
    for (let i = 0; i < this.containerItens.length; i++) {
      const componentRef = this.itensComponent[i];
      const component = (componentRef) as ComponentRef<ItemPedidoComponent>;
      console.log(component);
      console.log(component.instance.qtdIten);
    }
  }

  teste(){

  }

  home() {
    
    this.router.navigate(['/home']); 
  }

  // Método chamado quando a ação é confirmada ou cancelada na modal
  onConfirmed(confirmed: boolean) {
    if (confirmed) {
      // Lógica para ação confirmada
      console.log('Ação confirmada');
    } else {
      // Lógica para ação cancelada
      console.log('Ação cancelada');
    }
    this.isConfirmationModalVisible = false;
  }
}
