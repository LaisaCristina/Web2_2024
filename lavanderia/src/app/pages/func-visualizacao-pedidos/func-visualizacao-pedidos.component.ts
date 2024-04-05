import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-func-visualizacao-pedidos',
  templateUrl: './func-visualizacao-pedidos.component.html',
  styleUrls: ['./func-visualizacao-pedidos.component.css']
})
export class FuncVisualizacaoPedidosComponent // visualizacao-pedidos.component.ts

{
  pedidos = [
    { numero: 1, dataHora: '2024-03-28 10:00', estado: 'EM ABERTO' },
    { numero: 2, dataHora: '2024-03-27 11:00', estado: 'REJEITADO' },
    { numero: 3, dataHora: '2024-03-26 12:00', estado: 'RECOLHIDO' },
    { numero: 4, dataHora: '2024-03-25 13:00', estado: 'AGUARDANDO PAGAMENTO' },
    { numero: 5, dataHora: '2024-03-24 14:00', estado: 'PAGO' },
    { numero: 6, dataHora: '2024-03-23 15:00', estado: 'FINALIZADO' }
  ];

  filtroDataInicio: string = '';
  filtroDataFim: string = '';

  filtrarPorData() {
    // Implemente a lógica de filtragem por data
  }

  limparFiltro() {
    // Implemente a lógica para limpar o filtro
  }

  confirmarRecolhimento(pedido: any) {
    // Implemente a lógica para confirmar recolhimento
  }

  confirmarLavagem(pedido: any) {
    // Implemente a lógica para confirmar lavagem
  }

  finalizarPedido(pedido: any) {
    // Implemente a lógica para finalizar pedido
  }
}
