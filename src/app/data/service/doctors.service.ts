import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctors, Doctor } from '../schema/doctors';
import { Users } from '../schema/users';
import { Visits } from '../schema/visits';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    "authorization": `Bearer ${localStorage.getItem("token")}`
  });

  constructor(private http: HttpClient) {

   }
  baseUrl='http://localhost:3000/users';

   public getDoctorsList(): Observable<Doctors> {
     return this.http.get<Doctors>('http://localhost:3000/users?job=doctor', {headers: this.headers});
   }

   public addPersonel(user: Users): Observable<Users> {
     return this.http.post<any>('http://localhost:3000/register', user.users, {headers: this.headers});
   }

   public getDoctorById(_id: string): Observable<Doctor> {
     const url = `${this.baseUrl}/${_id}`;
     return this.http.get<Doctor>(url, {headers: this.headers})
   }

   public updateDoctor(doctor: Doctor): Observable<any> {
     const url = `${this.baseUrl}/${doctor.user._id}`;
     return this.http.put(url, doctor.user, {headers: this.headers })
   }

   public deleteDoctor(_id: string): Observable<Doctors> {
     const url= `${this.baseUrl}/${_id}`;
     return this.http.delete<Doctors>(url, {headers: this.headers});
   }

}
