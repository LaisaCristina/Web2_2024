import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.css']
})
export class ModalConfirmacaoComponent {
  @Input() pedido: any;
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  confirmAction() {
    this.confirmed.emit(true);
  }

  cancelAction() {
    this.confirmed.emit(false);
  }
}
