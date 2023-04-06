import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-registros',
  templateUrl: './crear-registros.component.html',
  styleUrls: ['./crear-registros.component.scss'],
})
export class CrearRegistrosComponent implements OnInit{
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

  public resgistroForm! : FormGroup;

  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
   this.resgistroForm = this.formBuilder.group({
      nombre: [''],
      apellidos: [''],
      email: [''],
      movil: [''],
      peso: [''],
      altura: [''],
      bmi: [''],
      bmiResult: [''],
      genero: [''],
      requierirEntrenador: [''],
      paquete: [''],
      listaImport: [''],
      GymAntes: [''],
      consultaFecha:['']
   })
  }

}
