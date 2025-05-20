import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../layout/layout.module';
import { PrincipalYtComponent } from './principal-yt.component';

const routes: Routes = [
  { path: '', component: PrincipalYtComponent }
];


@NgModule({
  declarations: [PrincipalYtComponent],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(routes),
  ],
  exports: [PrincipalYtComponent]
})
export class PrincipalYtModule { }
