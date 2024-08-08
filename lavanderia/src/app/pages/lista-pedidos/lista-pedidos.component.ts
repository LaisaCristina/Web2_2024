import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/Pedido';
import { Router } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {
  pedidos: any[] = []; // Correção aqui: Defina como um array de Pedido
  filtroEstado: string = '';

  constructor(private pedidoService: PedidosService, private router: Router) { }

  ngOnInit(): void {
    this.pedidoService.getPedidos().subscribe({
      next: (pedidos: Pedido[]) => {
        // Transformando pedidos
        this.pedidos = pedidos.map(pedido => ({
          numero: pedido.id, // Exemplo: assumindo que o ID do pedido é o número
          dataHora: this.formatarData(new Date(pedido.dataHora)), // Formatação para 'DD/MM/YYYY HH:MM'
          estado: pedido.estado,
          valor: pedido.total.toFixed(2) // Supondo que `valor` é um número e formatando-o para duas casas decimais
        }));
      },
      error: (err) => {
        console.error('Erro ao obter pedidos:', err);
      }
    });
  }

  pagarPedido(pedido: any) {
    console.log('Pagar pedido:', pedido);
    // Aqui você pode adicionar a lógica para pagar o pedido
  }

  private formatarData(data: Date): string {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    const horas = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
  }
}
