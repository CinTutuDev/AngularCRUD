import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Componentes
import { CrearRegistrosComponent } from './crear-registros/crear-registros.component';
import { DetallesUserComponent } from './detalles-user/detalles-user.component';
import { ListaRegistrosComponent } from './lista-registros/lista-registros.component';
//Instalados ...npm i...
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';
@NgModule({
  declarations: [
    AppComponent,
    CrearRegistrosComponent,
    DetallesUserComponent,
    ListaRegistrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Instalados 
    NgToastModule,
    NgConfirmModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
