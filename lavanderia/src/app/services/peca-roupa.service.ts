import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';
import { PecaRoupa } from '../models/PecaRoupa';


@Injectable({
  providedIn: 'root'
})
export class PecaRoupaService {

  constructor(private httpClient: HttpClient) {}
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response' as 'body'
  };

  private BASE_URL = 'http://localhost:8080/'; // URL da API

  cadastrarRoupa(roupa: PecaRoupa): Observable<PecaRoupa>{
    return this.httpClient.post<PecaRoupa>(this.BASE_URL+'cadastrarRoupa', JSON.stringify(roupa), this.httpOptions)
    .pipe(
      catchError((e) => {
        console.error('Erro ao criar usuário', e);
        return throwError(e);
      })
    );
  }


  getPecaRoupas(): Observable<PecaRoupa[]> {
    console.log('Iniciando requisição para obter peças de roupa');
    return this.httpClient.get<PecaRoupa[]>(this.BASE_URL + 'pecasRoupas', { ...this.httpOptions, observe: 'response' }).pipe(
      map((response: HttpResponse<PecaRoupa[]>) => {
        // Aqui você pode tratar a resposta de sucesso
        console.log('Resposta recebida:');
        console.log(response);
        return response.body as PecaRoupa[]; // Retorna o array de PecaRoupa para quem chama o método
      }),
      catchError((error: HttpErrorResponse) => {
        // Aqui você pode tratar os erros
        console.error('Erro ao obter as peças de roupa:', error.message);
        return throwError(() => new Error('Falha ao obter as peças de roupa. Por favor, tente novamente.'));
      })
    );
  }

  updatePecaRoupa(roupa: PecaRoupa | null): Observable<PecaRoupa>{
    console.log(roupa)
    return this.httpClient.put<PecaRoupa>(this.BASE_URL + 'updatePecaRoupa',JSON.stringify(roupa), { ...this.httpOptions, observe: 'response' }).pipe(
      map((response: HttpResponse<PecaRoupa>) => {
        // Aqui você pode tratar a resposta de sucesso
        console.log('RESPOSTAS')
        console.log(response);
        return response.body as PecaRoupa; // Retorna o array de PecaRoupa para quem chama o método
      }),
      catchError((error: HttpErrorResponse) => {
        // Aqui você pode tratar os erros
        console.error('Erro ao obter as peças de roupa:', error.message);
        return throwError(() => new Error('Falha ao obter as peças de roupa. Por favor, tente novamente.'));
      })
    );

  }
}
