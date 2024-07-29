import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) {}

  private BASE_URL = 'http://localhost:8080/'; // URL da API

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response' as 'body'
  };

  getUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.BASE_URL, {
      headers: this.httpOptions.headers,
      observe: 'response'
    }).pipe(
      map((resp: HttpResponse<Usuario[]>) => {
        return resp.body || [];
      }),
      catchError((e) => {
        console.error('Erro ao buscar usuários', e);
        return throwError(e);
      })
    );
  }

  cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    console.log(usuario)
    return this.httpClient.post<Usuario>(this.BASE_URL+'cadastrarUsuario', JSON.stringify(usuario), this.httpOptions)
      .pipe(
        catchError((e) => {
          console.error('Erro ao criar usuário', e);
          return throwError(e);
        })
      );
  }
  
}
