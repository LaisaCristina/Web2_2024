import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { PecaRoupaService } from '../../services/peca-roupa.service';
import { PecaRoupa } from '../../models/PecaRoupa';
import { ItemPedido } from 'src/app/models/ItemPedido';
import { Pedido } from 'src/app/models/Pedido';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pecasForm: FormGroup;
  message: string = '';
  messageType: 'success' | 'error' = 'success';
  notificationMessage: string | null = null;
  notificationType: 'success' | 'error' | 'danger' | 'warning' | 'info' = 'success';

  constructor(private fb: FormBuilder, private pecaRoupaService: PecaRoupaService, private pedidoService: PedidosService,    private router: Router) {
    this.pecasForm = this.fb.group({
      pecas: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.pecaRoupaService.getPecaRoupas().subscribe((pecasRoupas: PecaRoupa[]) => {
      this.addPecas(pecasRoupas);
    });
  }

  get pecas(): FormArray {
    return this.pecasForm.get('pecas') as FormArray;
  }

  addPecas(pecasRoupas: PecaRoupa[]): void {
    pecasRoupas.forEach((peca) => {
      this.pecas.push(this.fb.group({
        id: [peca.id],
        descricao: [peca.descricao],
        preco: [peca.preco],
        prazo: [peca.prazo],
        imagem: [peca.imagem],
        quantidade: [1]
      }));
    });
  }

  onSubmit(): void {
    const itensPedido: ItemPedido[] = this.pecasForm.value.pecas.map((peca: any) => ({
      roupa: {
        id: peca.id,
        descricao: peca.descricao,
        preco: peca.preco,
        prazo: peca.prazo,
        imagem: peca.imagem
      },
      qtde: peca.quantidade
    }));

    const usuario: Usuario = JSON.parse(localStorage.getItem('usuario')!); // Certifique-se de que o usuário está corretamente atribuído

    const pedido: Pedido = {
      usuario: usuario, // Atribui o usuário correto
      dataHora: new Date(),
      estado: 'Novo',
      total: this.calculateTotal(itensPedido),
      itens: itensPedido // Assegura que a lista de itens não está nula
    };

    this.pedidoService.criarPedido(pedido).subscribe({
      next: (pedido) => {
        this.showNotification(`Pedido ${pedido.id} cadastrado com sucesso!`, 'success');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
      },
      error: () => {
        this.message = 'Erro ao cadastrar usuário.';
        this.messageType = 'error';
      }
    });
  }

  private calculateTotal(itensPedido: ItemPedido[]): number {
    return itensPedido.reduce((total, item) => total + (item.roupa.preco * item.qtde), 0);
  }

  showNotification(message: string, type: 'success' | 'error' | 'warning' | 'info') {
    this.notificationMessage = message;
    this.notificationType = type;
  }

  clearNotification() {
    this.notificationMessage = null;
  }
}