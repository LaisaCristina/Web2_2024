import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input() message: string | null = null;
  @Input() type: 'success' | 'error' | 'danger' | 'warning' | 'info' = 'success';
  @Output() closed = new EventEmitter<void>();
  @Output() onConfirm = new EventEmitter<void>();

  close() {
    this.message = null;
    this.closed.emit();
  }

  confirm() {
    this.onConfirm.emit();
  }
  
  getTitle() {
    switch (this.type) {
      case 'success':
        return 'Sucesso';
      case 'danger':
        return 'Erro';
      case 'warning':
        return 'Aviso';
      case 'info':
        return 'Informação';
      default:
        return 'Notificação';
    }
  }  
}
