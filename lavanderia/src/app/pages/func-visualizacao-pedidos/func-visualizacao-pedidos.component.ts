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
    { numero: 2, dataHora: '2024-06-16', estado: 'REJEITADO' },
    { numero: 3, dataHora: '2024-07-17', estado: 'RECOLHIDO' },
    { numero: 4, dataHora: '2024-05-18', estado: 'AGUARDANDO PAGAMENTO' },
    { numero: 5, dataHora: '2024-03-24', estado: 'PAGO' },
    { numero: 6, dataHora: '2024-03-20', estado: 'FINALIZADO' },
    { numero: 1, dataHora: '2024-07-24', estado: 'AGUARDANDO PAGAMENTO' },
    { numero: 1, dataHora: '2024-07-25', estado: 'AGUARDANDO PAGAMENTO' },
    { numero: 1, dataHora: '2024-07-24', estado: 'PAGO' },
    { numero: 1, dataHora: '2024-07-25', estado: 'PAGO' },
  ];

  pedidosFiltrados: any[] = [];
  filtroDataInicio: string = '';
  filtroDataFim: string = '';
  quantidadePedidos: number = 0;
  mensagemErro: string = '';

  ngOnInit(): void {
    this.pedidosFiltrados = [...this.pedidos]; // Inicialmente mostra todos os pedidos
    this.quantidadePedidos = this.pedidosFiltrados.length;
  }


  filtrarPorData(): void {

    if (!this.filtroDataInicio || !this.filtroDataFim) {
      this.pedidosFiltrados = [];
      this.mensagemErro = 'Escolha uma data de início e de fim';
      this.quantidadePedidos = 0;
      return;
    }

    const filtroDataInicio = new Date(this.filtroDataInicio);
    const filtroDataFim = new Date(this.filtroDataFim);

    this.pedidosFiltrados = this.pedidos.filter(pedido => {
      const dataPedido = new Date(pedido.dataHora);
      return dataPedido >= filtroDataInicio && dataPedido <= filtroDataFim;
    });
    this.pedidosFiltrados.sort((a, b) => new Date(a.dataHora).getTime() - new Date(b.dataHora).getTime());
    this.quantidadePedidos = this.pedidosFiltrados.length;

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


  pedidosDeHoje(): void {
    this.filtroDataInicio = '';
    this.filtroDataFim = '';
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const amanha = new Date(hoje);
    amanha.setDate(hoje.getDate() + 1);

    this.pedidosFiltrados = this.pedidos.filter(pedido => {
      const dataPedido = new Date(pedido.dataHora);
      return dataPedido >= hoje && dataPedido < amanha;
    });

    this.pedidosFiltrados.sort((a, b) => new Date(a.dataHora).getTime() - new Date(b.dataHora).getTime());
    this.quantidadePedidos = this.pedidosFiltrados.length;
    this.mensagemErro = ''; // Limpar a mensagem de erro após um filtro bem-sucedido
  }

  mostrarTodosOsPedidos() {
    this.filtroDataInicio = '';
    this.filtroDataFim = '';
    this.pedidosFiltrados = [...this.pedidos];
    this.pedidosFiltrados.sort((a, b) => new Date(a.dataHora).getTime() - new Date(b.dataHora).getTime());
    this.quantidadePedidos = this.pedidosFiltrados.length;
    this.mensagemErro = ''; // Limpar a mensagem de erro após um filtro bem-sucedido
  }
}
