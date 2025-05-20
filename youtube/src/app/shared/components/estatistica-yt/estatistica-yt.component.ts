import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-estatistica-yt',
  templateUrl: './estatistica-yt.component.html',
  styleUrls: ['./estatistica-yt.component.css']
})
export class EstatisticaYtComponent {
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Usuário Logado', 'Outros Usuários'],
    datasets: [
      {
        data: [],
        label: 'Vídeos',
        backgroundColor: '#42A5F5'
      }
    ]
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: { videos_usuario_logado: number, videos_outros_usuarios: number }, private dialogRef: MatDialogRef<EstatisticaYtComponent>) {
    this.barChartData.datasets[0].data = [
      data.videos_usuario_logado,
      data.videos_outros_usuarios
    ];
  }

  fecharDialog() {
    this.dialogRef.close();
  }
}
