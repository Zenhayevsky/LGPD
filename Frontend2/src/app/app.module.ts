import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Views/Login/login/login.component';
import { CadastroComponent } from './Views/cadastro/cadastro.component';
import { Cabecalho1Component } from './components/templates/cabecalho1/cabecalho1.component';
import { Cabecalho2Component } from './components/templates/cabecalho2/cabecalho2.component';
import { FooterComponent } from './components/templates/footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { SolicitacoesComponent } from './Views/solicitacoes/solicitacoes.component';
import { MatListModule } from '@angular/material/list';

import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    Cabecalho1Component,
    Cabecalho2Component,
    FooterComponent,
    SolicitacoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
