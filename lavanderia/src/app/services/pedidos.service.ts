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
    return this.httpClient.post<Pedido>(this.BASE_URL + 'criarPedido', JSON.stringify(pedido),  { observe: 'response', headers: this.httpOptions.headers })
    .pipe(
      map((response: HttpResponse<Pedido>) => {
        // Aqui você pode tratar a resposta de sucesso
        return response.body as Pedido; // Retorna o usuário para quem chama o método
      }),
      catchError((error: HttpErrorResponse) => {
        // Aqui você pode tratar os erros
        console.error('Erro no login:', error.message);
        // TODO ERRRRRROOO MENSAGEM
        return throwError(() => new Error('Falha ao realizar o pedido. Por favor, tente novamente lalalalallalal')); // Lança uma exceção com uma mensagem de erro
      })
    );
  }
}
