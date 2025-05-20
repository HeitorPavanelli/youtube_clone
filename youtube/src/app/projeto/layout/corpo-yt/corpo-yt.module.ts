import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorpoYtComponent } from './corpo-yt.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ConversorTempoPipe } from 'src/app/shared/Pipes/conversor-tempo.pipe';



@NgModule({
  declarations: [CorpoYtComponent, ConversorTempoPipe],
  imports: [
    CommonModule,

  ],
  exports: [CorpoYtComponent]
})
export class CorpoYtModule { }
