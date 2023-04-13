import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { NgToastService } from 'ng-angular-popup';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.models';
@Component({
  selector: 'app-crear-registros',
  templateUrl: './crear-registros.component.html',
  styleUrls: ['./crear-registros.component.scss'],
})
export class CrearRegistrosComponent implements OnInit {
  selectedGender!: string;
  generos: string[] = ['Mujer', 'Hombre'];
  packs: string[] = ['mensual', 'trimestral', 'anual'];
  listaImpo: string[] = [
    'Reducción de grasas tóxicas',
    'Energía y resistencia',
    'Construyendo músculo magro',
    'sistema digestivo más sano',
    'cuerpo con antojo de azúcar',
    'Fitness',
  ];
  resgistroForm!: FormGroup;
  public userIdBorrarDate!: number;
  public isUpdateActive: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private toastService: NgToastService,
    private activateRoute: ActivatedRoute,
    private router: Router
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
      tieneGymAntes: [''],
      consultaFecha: [''],
    });
    this.resgistroForm.controls['altura'].valueChanges.subscribe((res) => {
      this.calculateBmi(res);
    });

    this.activateRoute.params.subscribe((val) => {
      this.userIdBorrarDate = val['id'];
      if (this.userIdBorrarDate) {
        this.isUpdateActive = true;
        this.api.getRegisteredUserId(this.userIdBorrarDate).subscribe({
          next: (res) => {
            this.llenarFormularioParaActualizar(res);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }

  llenarFormularioParaActualizar(user: User) {
    this.resgistroForm.setValue({
      nombre: user.nombre,
      apellidos: user.apellidos,
      email: user.email,
      movil: user.movil,
      peso: user.peso,
      altura: user.altura,
      bmi: user.bmi,
      bmiResult: user.bmiResult,
      genero: user.genero,
      requierirEntrenador: user.requierirEntrenador,
      paquete: user.paquete,
      listaImport: user.listaImport,
      tieneGymAntes: user.GymAntes,
      consultaFecha: user.consultaFecha,
    });
  }
  submit() {
    this.api.postRegistration(this.resgistroForm.value).subscribe((res) => {
      this.toastService.success({
        detail: 'Success',
        summary: 'consulta añadida',
        duration: 3000,
      });
      this.resgistroForm.reset();
    });
  }

  update() {
    this.api
      .updateRegisterUser(this.resgistroForm.value, this.userIdBorrarDate)
      .subscribe((res) => {
        this.toastService.success({
          detail: 'SUCCESS',
          summary: 'Detalles del usuario actualizados con éxito',
          duration: 3000,
        });
        this.router.navigate(['lista']);
        this.resgistroForm.reset();
      });
  }


  calculateBmi(value: number) {
    const peso = this.resgistroForm.value.peso; // weight in kilograms
    const altura = value; // height in meters
    const bmi = peso / (altura * altura);
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
