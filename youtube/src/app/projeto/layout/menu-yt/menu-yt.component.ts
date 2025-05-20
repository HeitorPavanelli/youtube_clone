import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EstatisticaYtComponent } from 'src/app/shared/components/estatistica-yt/estatistica-yt.component';
import { VideoUploadYtComponent } from 'src/app/shared/components/video-upload-yt/video-upload-yt.component';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-menu-yt',
  templateUrl: './menu-yt.component.html',
  styleUrls: ['./menu-yt.component.css']
})
export class MenuYtComponent {
  @Input() usuarioLogado: number = 0;

  @Output() atualizarPagina = new EventEmitter<boolean>();

  constructor(private dialog: MatDialog, private service: LayoutService) { }

  abrirMenu(event: boolean) {
  }

  abrirDialogVideo(event: any) {
    const dialogRef = this.dialog.open(VideoUploadYtComponent, {
      width: '400px',
      maxHeight: '700px',
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.atualizarPagina.emit(true);
      }
    });
  }

  abrirDialogEstatistica() {
    this.service.buscaEstatisticaByUsuarioLogado(this.usuarioLogado).subscribe(retorno => {
      const dados = {
        videos_usuario_logado: retorno[0].videos_usuario_logado,
        videos_outros_usuarios: retorno[0].videos_outros_usuarios
      };

      this.dialog.open(EstatisticaYtComponent, {
        width: '500px',
        maxWidth: '90vw',
        maxHeight: '80vh',
        data: dados
      });
    })
  }

}
