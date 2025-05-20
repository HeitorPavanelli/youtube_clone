import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared/models/Usuario';

const URL = "http://localhost:5000/youtube/usuario";

@Injectable({
  providedIn: 'root'
})
export class CadastroYtService {

  constructor(private http: HttpClient) { }

  criarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(URL, usuario) ?? {};
  }
}
