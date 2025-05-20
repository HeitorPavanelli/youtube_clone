import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pesquisa-yt',
  templateUrl: './pesquisa-yt.component.html',
  styleUrls: ['./pesquisa-yt.component.css']
})
export class PesquisaYtComponent {

  valor = "";

  @Output() texto = new EventEmitter<string>();

  onChange() {
    this.texto.emit(this.valor);
  }

  filtrar() {
    this.texto.emit(this.valor);
  }

}
