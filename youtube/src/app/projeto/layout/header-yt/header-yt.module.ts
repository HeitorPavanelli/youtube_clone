import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { PesquisaYtModule } from 'src/app/shared/components/pesquisa-yt/pesquisa-yt.module';
import { HeaderYtComponent } from './header-yt.component';


@NgModule({
  declarations: [HeaderYtComponent],
  imports: [
    CommonModule,
    PesquisaYtModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [HeaderYtComponent]
})
export class HeaderYtModule { }
