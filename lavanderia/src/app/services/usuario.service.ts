import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse,HttpErrorResponse } from '@angular/common/http';
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

  login(login: Login): Observable<Usuario> {
    console.log('aaaa')
    return this.httpClient.post<Usuario>(`${this.BASE_URL}login`, JSON.stringify(login), { observe: 'response', headers: this.httpOptions.headers })
    .pipe(
      map((response: HttpResponse<Usuario>) => {
        // Aqui você pode tratar a resposta de sucesso
        console.log('Login bem-sucedido:', response.body);
        let usu = response.body as Usuario;
        localStorage.setItem('usuario',JSON.stringify(usu));
        return response.body as Usuario; // Retorna o usuário para quem chama o método
      }),
      catchError((error: HttpErrorResponse) => {
        // Aqui você pode tratar os erros
        console.error('Erro no login:', error.message);
        // TODO ERRRRRROOO MENSAGEM
        return throwError(() => new Error('Falha ao realizar o login. Por favor, tente novamente lalalalallalal')); // Lança uma exceção com uma mensagem de erro
      })
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
