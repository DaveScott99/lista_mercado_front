import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListasComponent } from './componentes/listas/listas.component';
import { DetalhelistaComponent } from './componentes/detalhelista/detalhelista.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ListasComponent,
    DetalhelistaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule, // preciso do componente de requisições HTTP
    FormsModule // preciso do componente de manipulação de formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
