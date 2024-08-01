import { Component, ViewContainerRef, ViewChild, ComponentRef } from '@angular/core';
import { Router } from '@angular/router';
import { ItemPedidoComponent } from './item-pedido/item-pedido.component';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  @ViewChild('containerItens', { read: ViewContainerRef }) containerItens!: ViewContainerRef;

  constructor(private router: Router, private pedidoService: PedidoService) {}

  isConfirmationModalVisible: boolean = false;
  isModalEmptyItens: boolean = false;
  isModalItemVazio: boolean = false;
  private itensComponent: ComponentRef<ItemPedidoComponent>[] = [];
  pedidoResumo: any = null; // Variável para armazenar os detalhes do pedido

  addPedido() {
    const teste = this.containerItens.createComponent(ItemPedidoComponent);
    this.itensComponent.push(teste);
  }

  confirmarPedido(){
    if(this.containerItens.length > 0){
      let flag: boolean = false;
      let valorTotal = 0;
      let prazoMaximo = new Date(0);
      const itens = [];

      for (let i = 0; i < this.containerItens.length; i++){
        const componentRef = this.itensComponent[i];
        const component = (componentRef) as ComponentRef<ItemPedidoComponent>;
        if (component.instance.qtdIten < 1 || !component.instance.item) {
          flag = true;
          break;
        } else {
          const item = component.instance.item; // Supor que o item é um objeto com nome, valor, etc.
          const quantidade = component.instance.qtdIten;
          valorTotal += item.valor * quantidade;
          prazoMaximo = new Date(Math.max(prazoMaximo.getTime(), item.prazo.getTime()));
          itens.push({ nome: item.nome, valor: item.valor, quantidade });
        }
      }
      if (flag) {
        this.isModalItemVazio = true;
      } else {
        this.pedidoResumo = {
          valorTotal,
          prazo: prazoMaximo,
          itens
        };
        this.isConfirmationModalVisible = true;
      }
    } else {
      this.isModalEmptyItens = true;
    }
  }

  enviarPedido(){
    this.pedidoService.enviarPedido(this.pedidoResumo); // Suponha que este serviço manipule o envio do pedido
    this.router.navigate(['/lista-pedidos']);
  }

  onConfirmed(confirmed: boolean) {
    if (confirmed) {
      this.enviarPedido();
    } else {
      this.pedidoService.rejeitarPedido(this.pedidoResumo); // Suponha que este serviço manipule a rejeição do pedido
    }
    this.isConfirmationModalVisible = false;
  }

  onConfirmedEmpty(confirmed: boolean) {
    this.isModalEmptyItens = false;
  }

  onConfirmedVazio(confirmed: boolean){
    this.isModalItemVazio = false;
  }
}
