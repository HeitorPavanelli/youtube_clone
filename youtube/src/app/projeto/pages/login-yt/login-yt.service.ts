import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared/models/Usuario';

const URL = "http://localhost:5000/youtube/usuario";

@Injectable({
  providedIn: 'root'
})
export class LoginYtService {

  constructor(private http: HttpClient) { }

  buscaUsuario(email: string, senha: string) {
    let params = new HttpParams()
      .set('email', email)
      .set('senha', senha);

    return this.http.get<Usuario[]>(URL, { params });
  }
}
