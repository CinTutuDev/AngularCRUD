import { Component, ViewChild, OnInit } from '@angular/core';
import { User } from './../models/user.models';
import { ApiService } from './../services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router  } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-lista-registros',
  templateUrl: './lista-registros.component.html',
  styleUrls: ['./lista-registros.component.scss'],
})
export class ListaRegistrosComponent implements OnInit {
  public users!: User[];
  dataSource!: MatTableDataSource<User>;
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'email', 'movil', 'bmiResult', 'genero', 'paquete', 'consultaFecha', 'action'];


  constructor(private api: ApiService, private router: Router, private confirmService: NgConfirmService, private toastService: NgToastService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.api.getRegisteredUser()
      .subscribe({
        next: (res) => {
          this.users = res;
          this.dataSource = new MatTableDataSource(this.users);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          console.log(err);
        }
      })
  }


  edit(id: number) {
    this.router.navigate(['update', id])
  }

  
  deleteUser(id: number) {
    this.confirmService.showConfirm("Are you sure want to Delete?",
      () => {
        //your logic if Yes clicked
        this.api.deleteRegistered(id)
          .subscribe({
            next: (res) => {
              this.toastService.success({ detail: 'Éxito', summary: 'Borrado exitosamente', duration: 3000 });
              this.getUsers();
            },
            error: (err) => {
              this.toastService.error({ detail: 'Error', summary: '¡Algo salió mal!', duration: 3000 });
            }
          })
      },
      () => {
        //yor logic if No clicked
      })

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
