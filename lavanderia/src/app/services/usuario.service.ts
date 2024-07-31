import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { Endereco } from '../models/Endereco';
import { Login } from '../models/Login';

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

  login(login: Login){
    this.httpClient.post<Usuario>(`${this.BASE_URL}login`, JSON.stringify(login), { observe: 'response', headers: this.httpOptions.headers })
    .pipe(
      tap(response => {
        let usuarioResp = response.body; // Acessa o corpo da resposta que é do tipo Usuario
        const headers = response.headers;    // Acessa os headers
        console.log('STatus   :')
        console.log(response.status)
        console.log('========================================')
        
        if (response.status){

        }
        if (usuarioResp) {
          console.log(usuarioResp); // Acessa o objeto Usuario
          localStorage.setItem('currentUser', JSON.stringify(usuarioResp));
        } else {
          console.error('O corpo da resposta é nulo');
        }
      }),
      catchError((e) => {
        console.error('Erro ao realizar login', e);
        return throwError(() => new Error('Falha ao realizar o login. Por favor, tente novamente.'));
      })
    )
    .subscribe(
      
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  cadastrarUsuario(usuario: Usuario, endereco: Endereco): Observable<Usuario> {
    const payload = { usuario, endereco };
    return this.httpClient.post<Usuario>(this.BASE_URL+'cadastrarUsuario', JSON.stringify(payload), this.httpOptions)
      .pipe(
        catchError((e) => {
          console.error('Erro ao criar usuário', e);
          return throwError(e);
        })
      );
  }
  
}
