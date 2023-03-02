import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoComponent } from './pages/navegacao/navegacao.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './pages/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ExpComponent } from './pages/exp/exp.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CicloComponent } from './ciclo/ciclo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacaoComponent,
    FooterComponent,
    InicioComponent,
    SobreComponent,
    ExpComponent,
    ProjectsComponent,
    ContatoComponent,
    CursosComponent,
    CicloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
