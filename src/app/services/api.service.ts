import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private URL: string = 'http://localhost:3000/consulta';

  constructor(private http: HttpClient) {}

  postRegistro(registerObj: User) {
    return this.http.post<User>(`${this.URL}`, registerObj);
  }

  conseguirRegistroUser() {
    return this.http.get<User[]>(`${this.URL}`);
  }

  actualizarRegistroUser(registerObj: User, id: number) {
    return this.http.put<User>(`${this.URL}/${id}`, registerObj);
  }

  borrarRegistro(id: number) {
    return this.http.delete<User>(`${this.URL}/${id}`);
  }

  coseguirRegistroIdUser(id: number) {
    return this.http.get<User>(`${this.URL}/${id}`);
  }
}
