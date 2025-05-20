import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estatistica } from 'src/app/shared/models/Estatistica';
import { Videos } from 'src/app/shared/models/Videos';

const URL = "http://localhost:5000/youtube/videos";
const URLUSUARIO = "http://localhost:5000/youtube/usuario";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http: HttpClient) { }

  buscaTodosVideos() {
    return this.http.get<Videos[]>(URL);
  }

  atualizaVisualizacao(videoId: number, link: string, novasVisualizacoes: number) {
    const body = {
      videoId,
      link,
      novasVisualizacoes: novasVisualizacoes + 1
    }

    return this.http.post<void>(URL + "/atualiza-visualizacoes", body);
  }

  buscaEstatisticaByUsuarioLogado(usuarioId: number) {
    let params = new HttpParams()
      .set('usuarioId', usuarioId);

    return this.http.get<Estatistica[]>(URLUSUARIO + "/estatistica", { params })
  }
}
