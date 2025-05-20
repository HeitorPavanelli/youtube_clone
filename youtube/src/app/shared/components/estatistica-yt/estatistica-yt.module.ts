import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstatisticaYtComponent } from './estatistica-yt.component';
import { NgChartsModule } from 'ng2-charts';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [EstatisticaYtComponent],
  imports: [
    CommonModule,
    NgChartsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [EstatisticaYtComponent]
})
export class EstatisticaYtModule { }
