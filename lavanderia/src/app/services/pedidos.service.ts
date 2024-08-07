import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';
import { Pedido } from '../models/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private httpClient: HttpClient) {}
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response' as 'body'
  };

  private BASE_URL = 'http://localhost:8080/'; // URL da API

  criarPedido(pedido: Pedido): Observable<Pedido> {
    console.log(pedido);
    return this.httpClient.post<Pedido>(this.BASE_URL + 'criarPedido', JSON.stringify(pedido), this.httpOptions)
      .pipe(
        catchError((e) => {
          console.error('Erro ao cadastrar pedido', e);
          return throwError(e);
        })
      );
  }
}
