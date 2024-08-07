import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Funcionario } from '../models/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private BASE_URL = 'http://localhost:8080/funcionarios'; // URL da API

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private httpClient: HttpClient) {}

  getFuncionarios(): Observable<Funcionario[]> {
    return this.httpClient.get<Funcionario[]>(this.BASE_URL, this.httpOptions).pipe(
      map(response => response || []),
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao obter funcionários:', error.message);
        return throwError(() => new Error('Falha ao obter funcionários. Por favor, tente novamente.'));
      })
    );
  }

  createFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.httpClient.post<Funcionario>(this.BASE_URL, funcionario, this.httpOptions).pipe(
      map(response => response as Funcionario),
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao criar funcionário:', error.message);
        return throwError(() => new Error('Falha ao criar funcionário. Por favor, tente novamente.'));
      })
    );
  }

  updateFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.httpClient.put<Funcionario>(`${this.BASE_URL}/${funcionario.id}`, funcionario, this.httpOptions).pipe(
      map(response => response as Funcionario),
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao atualizar funcionário:', error.message);
        return throwError(() => new Error('Falha ao atualizar funcionário. Por favor, tente novamente.'));
      })
    );
  }

  deleteFuncionario(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.BASE_URL}/${id}`, this.httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao deletar funcionário:', error.message);
        return throwError(() => new Error('Falha ao deletar funcionário. Por favor, tente novamente.'));
      })
    );
  }
}
