import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationModalComponent } from '../../components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-func-visualizacao-pedidos',
  templateUrl: './func-visualizacao-pedidos.component.html',
  styleUrls: ['./func-visualizacao-pedidos.component.css']
})
export class FuncVisualizacaoPedidosComponent implements OnInit {
  @ViewChild('confirmationModal') confirmationModal!: ConfirmationModalComponent;

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

  constructor() { }

  ngOnInit(): void {
  }

  confirmarAcao(pedido: any, acao: string) {
    let title = '';
    let message = '';
  
    switch (acao) {
      case 'recolhimento':
        title = 'Confirmar Recolhimento';
        message = 'Tem certeza que deseja confirmar o recolhimento deste pedido?';
        break;
      case 'lavagem':
        title = 'Confirmar Lavagem';
        message = 'Tem certeza que deseja confirmar a lavagem deste pedido?';
        break;
      case 'finalizacao':
        title = 'Finalizar Pedido';
        message = 'Tem certeza que deseja finalizar este pedido?';
        break;
      default:
        break;
    }
  
    this.confirmationModal.title = title;
    this.confirmationModal.message = message;
    this.confirmationModal.showModal();
  
    this.confirmationModal.confirmAction.subscribe((confirmed: boolean) => {
      if (confirmed) {
        switch (acao) {
          case 'recolhimento':
            this.confirmarRecolhimento(pedido);
            break;
          case 'lavagem':
            this.confirmarLavagem(pedido);
            break;
          case 'finalizacao':
            this.finalizarPedido(pedido);
            break;
          default:
            break;
        }
      }
    });
  }

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
