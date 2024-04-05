import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-empty-itens',
  templateUrl: './modal-empty-itens.component.html',
  styleUrls: ['./modal-empty-itens.component.css']
})
export class ModalEmptyItensComponent {
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();
  
    confirmActionEmpty() {
      this.confirmed.emit(true);
    }
  
}

