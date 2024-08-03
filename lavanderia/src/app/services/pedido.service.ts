import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pedidosRejeitados: any[] = [];

  enviarPedido(pedido: any) {
    // Implementar a lógica para enviar o pedido
    console.log('Pedido enviado:', pedido);
  }

  rejeitarPedido(pedido: any) {
    // Implementar a lógica para rejeitar o pedido
    this.pedidosRejeitados.push(pedido);
    console.log('Pedido rejeitado:', pedido);
  }

  getPedidosRejeitados() {
    return this.pedidosRejeitados;
  }
}
