import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoUploadYtComponent } from 'src/app/shared/components/video-upload-yt/video-upload-yt.component';
import { Usuario } from 'src/app/shared/models/Usuario';

@Component({
  selector: 'app-principal-yt',
  templateUrl: './principal-yt.component.html',
  styleUrls: ['./principal-yt.component.css']
})
export class PrincipalYtComponent implements OnInit {

  usuarioLogado = "";
  usuarioId = 0;
  atualizarPagina: boolean = false;
  textoDigitadoParaFiltrar = "";

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    const usuarioString = sessionStorage.getItem("usuario");

    if (usuarioString) {
      const usuario: Usuario = JSON.parse(usuarioString);
      this.usuarioId = usuario.id;
      this.usuarioLogado = usuario.nome.charAt(0).toUpperCase();
    }
  }

  abrirMenu(event: boolean) {
  }

  atualizarVideos(event: any) {
    this.atualizarPagina = event;
  }

  textoDigitado(event: any) {
    this.textoDigitadoParaFiltrar = event;
  }

  abrirDialogVideo(event: any) {
    const dialogRef = this.dialog.open(VideoUploadYtComponent, {
      maxWidth: '400px',
      maxHeight: '700px',
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

}
