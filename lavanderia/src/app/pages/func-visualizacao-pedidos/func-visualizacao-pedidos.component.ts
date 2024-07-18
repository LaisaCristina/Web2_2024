import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-func-visualizacao-pedidos',
  templateUrl: './func-visualizacao-pedidos.component.html',
  styleUrls: ['./func-visualizacao-pedidos.component.css']
})
export class FuncVisualizacaoPedidosComponent implements OnInit {
  // visualizacao-pedidos.component.ts

  pedidos: any[] = [
    { numero: 1, dataHora: '2024-07-15', estado: 'EM ABERTO' },
    { numero: 2, dataHora: '2024-07-16', estado: 'REJEITADO' },
    { numero: 3, dataHora: '2024-07-17', estado: 'RECOLHIDO' },
    { numero: 4, dataHora: '2024-07-18', estado: 'AGUARDANDO PAGAMENTO' },
    { numero: 5, dataHora: '2024-03-24', estado: 'PAGO' },
    { numero: 6, dataHora: '2024-03-23', estado: 'FINALIZADO' }
  ];

  pedidosFiltrados: any[] = [];
  filtroDataInicio: string = '';
  filtroDataFim: string = '';

  ngOnInit(): void {
    this.pedidosFiltrados = [...this.pedidos]; // Inicialmente mostra todos os pedidos
  }


  filtrarPorData(): void {
    const filtroDataInicio = new Date(this.filtroDataInicio);
    const filtroDataFim = new Date(this.filtroDataFim);

    this.pedidosFiltrados = this.pedidos.filter(pedido => {
      const dataPedido = new Date(pedido.dataHora);
      return dataPedido >= filtroDataInicio && dataPedido <= filtroDataFim;
    });
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
