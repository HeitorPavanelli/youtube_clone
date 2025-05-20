import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SpinnerYtComponent } from './spinner-yt.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [SpinnerYtComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
  ],
  exports: [SpinnerYtComponent]
})
export class SpinnerYtModule { }
