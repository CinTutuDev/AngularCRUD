import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-crear-registros',
  templateUrl: './crear-registros.component.html',
  styleUrls: ['./crear-registros.component.scss'],
})
export class CrearRegistrosComponent implements OnInit {
  public resgistroForm!: FormGroup;
  submitted = false;

  public packs: string[] = ['mensual', 'trimestral', 'anual'];
  public genero: string[] = ['Mujer', 'Hombre'];
  public listaImpo: string[] = [
    'Reducción de grasas tóxicas',
    'Energía y resistencia',
    'Construyendo músculo magro',
    'sistema digestivo más sano',
    'cuerpo con antojo de azúcar',
    'Fitness',
  ];

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private toastService: NgToastService
  ) {}
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
      consultaFecha: [''],
    });
    this.resgistroForm.controls['altura'].valueChanges.subscribe((res) => {
      this.calculateBmi(res);
    });
  }
  get f() {
    return this.resgistroForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.resgistroForm.invalid) {
      return;
    }

    this.api.postRegistro(this.resgistroForm.value).subscribe((res) => {
      this.toastService.success({
        detail: 'Success',
        summary: 'consulta añadida',
        duration: 3000,
      });
      this.resgistroForm.reset();
    });

    console.log(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.resgistroForm.value, null, 4)
    );
    const regitro = this.resgistroForm.value;
    console.log(regitro);
  }
  /* submit() {
    this.api.postRegistro(this.resgistroForm.value).subscribe((res) => {
      this.toastService.success({
        detail: 'Success',
        summary: 'consulta añadida',
        duration: 3000,
      });
      this.resgistroForm.reset();
    });
  } */
  onReset() {
    this.submitted = false;
    this.resgistroForm.reset(this.resgistroForm.value);
  }

  calculateBmi(value: number) {
    const weight = this.resgistroForm.value.peso; // weight in kilograms
    const height = value; // height in meters
    const bmi = weight / (height * height);
    this.resgistroForm.controls['bmi'].patchValue(bmi);
    switch (true) {
      case bmi < 18.5:
        this.resgistroForm.controls['bmiResult'].patchValue('Bajo peso');
        break;
      case bmi >= 18.5 && bmi < 25:
        this.resgistroForm.controls['bmiResult'].patchValue('Peso normal');
        break;
      case bmi >= 25 && bmi < 30:
        this.resgistroForm.controls['bmiResult'].patchValue('Sobrepeso');
        break;

      default:
        this.resgistroForm.controls['bmiResult'].patchValue('Obeso/a');
        break;
    }
  }
}
