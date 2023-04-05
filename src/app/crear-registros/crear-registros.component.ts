import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-registros',
  templateUrl: './crear-registros.component.html',
  styleUrls: ['./crear-registros.component.scss'],
})
export class CrearRegistrosComponent {
  public packs: string[] = ['mensual', 'trimestral', 'anual'];
  public genero: string[] = ['Mujer', 'Hombre'];
  public listaImpo: string[] = [
    'Reducción de grasas tóxicas',
    'Energía y resistencia',
    'Construyendo músculo magro',
    'sistema digestivo más sano',
    'cuerpo con antojo de azúcar',
    'Fitness'
  ];
}
