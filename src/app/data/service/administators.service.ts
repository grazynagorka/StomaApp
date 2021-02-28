import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrators } from '../schema/administrators';

@Injectable({
  providedIn: 'root'
})
export class AdministatorsService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    "authorization": `Bearer ${localStorage.getItem("token")}`
  });

  constructor(private http: HttpClient) { }

  makeAdminUrl='http://localhost:3000/users/make-admin';

  public getAdminsList(): Observable<Administrators> {
    return this.http.get<Administrators>('http://localhost:3000/users?job=admin', {headers: this.headers});
  }

  public makeAdmin(_id: string): Observable<Administrators> {
    const url =`${this.makeAdminUrl}/${_id}`
    return this.http.patch<Administrators>(url, {headers: this.headers})
  }
}
