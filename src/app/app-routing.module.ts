import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearRegistrosComponent } from './crear-registros/crear-registros.component';
import { ListaRegistrosComponent } from './lista-registros/lista-registros.component';
import { DetallesUserComponent } from './detalles-user/detalles-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'registro', pathMatch: 'full'},
  {path: 'registro', component: CrearRegistrosComponent},
  {path: 'lista', component: ListaRegistrosComponent},
  {path: 'detalle/:id', component: DetallesUserComponent},
  {path: 'borrar/:id', component: CrearRegistrosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
