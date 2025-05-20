import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./projeto/pages/login-yt/login-yt.module').then(m => m.LoginYtModule)
  },
  {
    path: 'principal',
    loadChildren: () =>
      import('./projeto/pages/principal-yt/principal-yt.module').then(m => m.PrincipalYtModule)
  },
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./projeto/pages/cadastro-yt/cadastro-yt.module').then(m => m.CadastroYtModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
