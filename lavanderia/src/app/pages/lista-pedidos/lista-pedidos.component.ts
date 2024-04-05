import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {
  pedidos = [
    { numero: '1', dataHora: '2024-03-28 10:00', estado: 'pendente', valor: 100 },
    { numero: '2', dataHora: '2024-03-27 11:00', estado: 'processando', valor: 150 },
    { numero: '3', dataHora: '2024-03-26 12:00', estado: 'enviado', valor: 200 },
    { numero: '4', dataHora: '2024-03-25 13:00', estado: 'entregue', valor: 250 }
  ];
  filtroEstado: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  pagarPedido(pedido: any) {
    console.log('Pagar pedido:', pedido);
    // Aqui você pode adicionar a lógica para pagar o pedido
  }

}
