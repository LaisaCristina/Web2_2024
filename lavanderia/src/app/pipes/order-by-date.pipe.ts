import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {
  transform(pedidos: any[], order: string): any[] {
    return pedidos.sort((a, b) => {
      return order === 'asc' ? new Date(a.dataHora).getTime() - new Date(b.dataHora).getTime() : new Date(b.dataHora).getTime() - new Date(a.dataHora).getTime();
    });
  }
}
