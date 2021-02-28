import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../schema/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    "authorization": `Bearer ${localStorage.getItem("token")}`
  });

  constructor(private http: HttpClient) { }

  baseUrl='http://localhost:3000/users';

  public getUsersList(): Observable<Users> {
    return this.http.get<Users>('http://localhost:3000/users?job=patient', {headers: this.headers});    
  }

  public deletePatient(_id: string): Observable<Users> {
    const url= `${this.baseUrl}/${_id}`;
    return this.http.delete<Users>(url, {headers: this.headers})
  }
}
