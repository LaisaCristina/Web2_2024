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
  isModalEmptyItens: boolean = false;
  isModalItemVazio: boolean = false;
  private itensComponent: ComponentRef<ItemPedidoComponent>[] = [];

  addPedido() {
    const teste = this.containerItens.createComponent(ItemPedidoComponent);
    this.itensComponent.push(teste);
  }

  confirmarPedido(){
    if(this.containerItens.length > 0){
      let flag: boolean = false;
      for (let i = 0; i < this.containerItens.length; i++){
        const componentRef = this.itensComponent[i];
        const component = (componentRef) as ComponentRef<ItemPedidoComponent>;
        if (component.instance.qtdIten < 1 ){
          flag = true;
          break;
        }
      }
      if (flag)
       this.isModalItemVazio = true;
      else
        this.isConfirmationModalVisible = true;
    }else{
      this.isModalEmptyItens = true;
    }
  }

  enviarPedido(){
    for (let i = 0; i < this.containerItens.length; i++) {
      const componentRef = this.itensComponent[i];
      const component = (componentRef) as ComponentRef<ItemPedidoComponent>;
      console.log(component);
      console.log(component.instance.qtdIten);
    }
    this.router.navigate(['/lista-pedidos'])
    
  }

  teste(){

  }

  home() {
    
    this.router.navigate(['/home']); 
  }

  // Método chamado quando a ação é confirmada ou cancelada na modal
  onConfirmed(confirmed: boolean) {
    if (confirmed) 
      this.enviarPedido();

    this.isConfirmationModalVisible = false;
  }

  onConfirmedEmpty(confirmed: boolean) {
    this.isModalEmptyItens = false;
  }


  onConfirmedVazio(confirmed: boolean){
    this.isModalItemVazio = false;
  }
}
