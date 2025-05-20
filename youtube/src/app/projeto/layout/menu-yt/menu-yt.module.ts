import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuYtComponent } from './menu-yt.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [MenuYtComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [MenuYtComponent]
})
export class MenuYtModule { }
