import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-item-vazio',
  templateUrl: './modal-item-vazio.component.html',
  styleUrls: ['./modal-item-vazio.component.css']
})
export class ModalItemVazioComponent {
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();
  
    confirmActionEmpty() {
      this.confirmed.emit(true);
    }
}
