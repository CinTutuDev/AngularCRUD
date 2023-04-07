import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() : void{
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
    this.resgistroForm.controls['altura'].valueChanges.subscribe(res => {
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

    // display form values on success
    /*   alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.resgistroForm.value, null, 4)
    ); */
    console.log(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.resgistroForm.value, null, 4)
    );
    const regitro = this.resgistroForm.value;
    console.log(regitro);
  }

  onReset() {
    this.submitted = false;
    this.resgistroForm.reset(this.resgistroForm.value);
  }

 /*  calcularBMI(alturaVAl: number) {
    const peso = this.resgistroForm.value.altura;
    const altura = alturaVAl;
    const bmi = peso / (altura * altura);
    this.resgistroForm.controls['bmi'].patchValue(bmi);
    switch (true) {
      case bmi < 18.5:
        this.resgistroForm.controls['bmiResult'].patchValue('Bajo peso');
        break;

      case( bmi >= 18.5 && bmi < 25):
        this.resgistroForm.controls['bmiResult'].patchValue('Peso normal');
        break;

      case ( bmi >= 25 && bmi < 30):
        this.resgistroForm.controls['bmiResult'].patchValue('Sobrepeso');
        break;

      default:
        this.resgistroForm.controls['bmiResult'].patchValue('Obeso/a');
        break;
    }
  } */

  calculateBmi(value: number) {
    const weight = this.resgistroForm.value.peso; // weight in kilograms
    const height = value; // height in meters
    const bmi = weight / (height * height);
    this.resgistroForm.controls['bmi'].patchValue(bmi);
    switch (true) {
      case bmi < 18.5:
        this.resgistroForm.controls['bmiResult'].patchValue('Bajo peso');
        break;
      case (bmi >= 18.5 && bmi < 25):
        this.resgistroForm.controls['bmiResult'].patchValue('Peso normal');
        break;
      case (bmi >= 25 && bmi < 30):
        this.resgistroForm.controls['bmiResult'].patchValue('Sobrepeso');
        break;

      default:
        this.resgistroForm.controls['bmiResult'].patchValue('Obeso/a');
        break;
    }
  }
}
