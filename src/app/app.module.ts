import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Componentes
import { CrearRegistrosComponent } from './crear-registros/crear-registros.component';
import { DetallesUserComponent } from './detalles-user/detalles-user.component';
import { ListaRegistrosComponent } from './lista-registros/lista-registros.component';

//A/Material_Componenetes
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
//Instalados ...npm i...
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';
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
    FormsModule,
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    MatChipsModule,
    MatCardModule,
    /* date */
    MatDatepickerModule,
    MatNativeDateModule,
    //Instalados
    NgToastModule,
    NgConfirmModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
