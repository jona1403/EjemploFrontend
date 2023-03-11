import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLBase } from '../../apiURL/URLBase';
import { Observable } from 'rxjs';
import { Register } from '../../models/register/register';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  postCreateCliente(usuario: Register): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.http.post<any>(URLBase + 'CreateUser', usuario, httpOptions)
  }
}
