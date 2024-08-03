import { Component, ElementRef, Renderer2 } 
from '@angular/core';import { NgModel,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-pedido',
  templateUrl: './item-pedido.component.html',
  styleUrls: ['./item-pedido.component.css']
})
export class ItemPedidoComponent {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  qtdIten: number = 0; // Variável para armazenar o valor do input

  addIten(event: Event){
    event.preventDefault();
    this.qtdIten = this.qtdIten + 1;
  }

  subIten(event: Event){
    event.preventDefault();
    if (this.qtdIten > 0)
      this.qtdIten = this.qtdIten - 1;
  }

  deletar(){
    const element = this.elementRef.nativeElement;
    this.renderer.removeChild(element.parentNode, element);  
  }
}
