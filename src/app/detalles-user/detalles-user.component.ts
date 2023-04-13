import { Component, OnInit } from '@angular/core';
import { User } from './../models/user.models';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-detalles-user',
  templateUrl: './detalles-user.component.html',
  styleUrls: ['./detalles-user.component.scss'],
})
export class DetallesUserComponent implements OnInit {
  id!: number;
  usuarioDetalles!: User;

  constructor(private activeRoute: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.activeRoute.params.subscribe((val) => {
      this.id = val['id'];
      this.obtenerDetallesUsuario(this.id);

    });
  }

  obtenerDetallesUsuario(id: number) {
    this.api.getRegisteredUserId(id)
    .subscribe({
      next: (res) => {
        this.usuarioDetalles = res;
        console.log(this.usuarioDetalles);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  
}
