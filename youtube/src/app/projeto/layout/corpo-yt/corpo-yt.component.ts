import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LayoutService } from '../layout.service';
import { Videos } from 'src/app/shared/models/Videos';

@Component({
  selector: 'app-corpo-yt',
  templateUrl: './corpo-yt.component.html',
  styleUrls: ['./corpo-yt.component.css']
})
export class CorpoYtComponent implements OnInit, OnChanges {

  @Input() atualizarPagina: boolean = false;

  @Input() filtroVideo: string = "";

  todosVideos: Videos[] = [];
  videos: Videos[] = [];

  backgroundColor: string = this.getRandomColor();

  constructor(private service: LayoutService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.inicializaVideos();
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['atualizarPagina'] && changes['atualizarPagina'].currentValue == true) {
      this.inicializaVideos();
    }

    if (changes['filtroVideo'] && changes['filtroVideo'].currentValue != undefined) {

      if (changes['filtroVideo'].currentValue == "") {
        this.videos = [...this.todosVideos];
        return;
      }

      this.videos = this.todosVideos.filter(video =>
        video.titulo?.toLowerCase().startsWith(changes['filtroVideo'].currentValue)
      );
    }
  }

  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  private inicializaVideos() {
    this.service.buscaTodosVideos().subscribe(retorno => {
      this.todosVideos = retorno;
      this.videos = [...this.todosVideos];
    })
  }

  abrirLinkDoVideo(video: Videos) {
    if (!video?.link) {
      alert('Link esta errado');
      return;
    }

    window.open(video.link, '_blank');

    const usuarioId = video.usuario?.id;
    const link = video.link;
    const visualizacoes = video.visualizacoes ?? 0;

    if (usuarioId && link) {
      this.service.atualizaVisualizacao(usuarioId, link, visualizacoes)
        .subscribe({
          next: () => {
            this.inicializaVideos();
          },
          error: err => console.error('Erro ao atualizar visualizações')
        });
    }
  }
}
