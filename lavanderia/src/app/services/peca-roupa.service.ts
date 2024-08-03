import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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

}
