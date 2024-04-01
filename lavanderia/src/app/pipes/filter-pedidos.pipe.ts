import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPedidos'
})
export class FilterPedidosPipe implements PipeTransform {
  transform(pedidos: any[], estado: string): any[] {
    if (!estado) return pedidos;
    return pedidos.filter(pedido => pedido.estado === estado);
  }
}
