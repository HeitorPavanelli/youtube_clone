import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-yt',
  templateUrl: './header-yt.component.html',
  styleUrls: ['./header-yt.component.css']
})
export class HeaderYtComponent {
  @HostListener('document:click', ['$event'])
  fecharDropdown(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (!target.closest('.user')) {
      this.dropdownAberto = false;
    }
  }

  @Output() menuToggle = new EventEmitter<boolean>();

  @Output() abrirDialog = new EventEmitter<boolean>();

   @Output() textoDigitado = new EventEmitter<string>();

  @Input() usuarioLogado = "";

  dropdownAberto = false;


  constructor(private router: Router) { }

  toggleMenu(event: Event) {
    this.menuToggle.emit(true);
  }

  openDialog(event: Event) {
    this.abrirDialog.emit(true)
  }

  toggleDropdown() {
    this.dropdownAberto = !this.dropdownAberto;
  }

  voltarLogin() {
    this.router.navigate(['']);
  }

  filtrar(valor: string) {
    this.textoDigitado.emit(valor);
  }

}
