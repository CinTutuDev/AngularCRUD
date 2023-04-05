import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearRegistrosComponent } from './crear-registros/crear-registros.component';
import { ListaRegistrosComponent } from './lista-registros/lista-registros.component';

const routes: Routes = [
  {path: '', redirectTo: 'registro', pathMatch: 'full'},
  {path: 'registro', component: CrearRegistrosComponent},
  {path: 'lista', component: ListaRegistrosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
