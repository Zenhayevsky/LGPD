import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Views/Login/login/login.component';
import { SolicitacoesComponent } from  './Views/solicitacoes/solicitacoes.component'
import { CadastroComponent } from  './Views/cadastro/cadastro.component'

const routes: Routes = [{
  path:"",
  component: LoginComponent
},
{
  path:"solicitacoes",
  component: SolicitacoesComponent
},
{
  path:"cadastro",
  component: CadastroComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
