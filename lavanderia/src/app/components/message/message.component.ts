import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() type: 'success' | 'error' = 'success';
  @Input() message: string = '';

  get messageClass(): string {
    return this.type === 'success' ? 'alert-success' : 'alert-danger';
  }
}
