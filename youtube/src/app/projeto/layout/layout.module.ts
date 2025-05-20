import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuYtModule } from './menu-yt/menu-yt.module';
import { HeaderYtModule } from './header-yt/header-yt.module';
import { CorpoYtComponent } from './corpo-yt/corpo-yt.component';
import { CorpoYtModule } from './corpo-yt/corpo-yt.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MenuYtModule,
    HeaderYtModule,
    CorpoYtModule,
  ],
  exports: [
    MenuYtModule,
    HeaderYtModule,
    CorpoYtModule,
  ]
})
export class LayoutModule { }
