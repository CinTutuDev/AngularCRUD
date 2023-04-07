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
//A/Material_Componenetes
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CrearRegistrosComponent,
    DetallesUserComponent,
    ListaRegistrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
     /* [formGroup]="resgistroForm" */
    ReactiveFormsModule,
    //A/Material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
       /* date */
    MatDatepickerModule,
    MatNativeDateModule,
    //Instalados 
    NgToastModule,
    NgConfirmModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
