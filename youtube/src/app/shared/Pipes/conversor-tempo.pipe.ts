import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversorTempo'
})
export class ConversorTempoPipe implements PipeTransform {

  transform(value: string | Date | undefined | null): string {
    if (!value) {
      return '';
    }

    const dataPostada = new Date(value);
    const agora = new Date();
    const diff = agora.getTime() - dataPostada.getTime();

    const minutos = Math.floor(diff / 60000);
    const horas = Math.floor(diff / 3600000);
    const dias = Math.floor(diff / 86400000);

    if (dias >= 1) {
      return `${dias} dia${dias > 1 ? 's' : ''} atrás`;
    } else if (horas >= 1) {
      return `${horas} hora${horas > 1 ? 's' : ''} atrás`;
    } else if (minutos >= 1) {
      return `${minutos} minuto${minutos > 1 ? 's' : ''} atrás`;
    } else {
      return 'agora mesmo';
    }
  }

}
