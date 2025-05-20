import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroYtComponent } from './cadastro-yt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', component: CadastroYtComponent }
];


@NgModule({
  declarations: [CadastroYtComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  exports: [CadastroYtComponent]
})
export class CadastroYtModule { }
