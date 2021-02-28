import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorVisits, Visit, Visits } from '../schema/visits';

@Injectable({
  providedIn: 'root'
})
export class VisitsService {

  

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
    'Accept': 'application/pdf'
  });

  constructor( private http: HttpClient ) { }

  visitsUrl='http://localhost:3000/visits?sortDirection=DESC&doctorId';
  deleteUrl='http://localhost:3000/visits'

  public getPersonalVisits(): Observable<Visits> {
    return this.http.get<Visits>('http://localhost:3000/visits/my', {headers: this.headers});
  }
  
  public getDoctorsVisit(_id: string, date: string): Observable<DoctorVisits> {
    const url = `${this.visitsUrl}=${_id}&date=${date}`;
    return this.http.get<DoctorVisits>(url, {headers: this.headers});
  }

  public getVisitById(_id: string): Observable<Visit> {
    const url = `${this.deleteUrl}/${_id}`;
    return this.http.get<Visit>(url, {headers: this.headers})
  }

  public updateVisits(visit: object, visitId: string): Observable<any> {
    const url =`${this.deleteUrl}/${visitId}`;
    return this.http.put(url, visit, {headers: this.headers});
  }

  public deleteVisit(_id: string): Observable<DoctorVisits> {
    const url=`${this.deleteUrl}/${_id}`;
    return this.http.delete<DoctorVisits>(url, {headers: this.headers});
  }

  public addVisit(visit: object): Observable<Visit> {
    return this.http.post<Visit>('http://localhost:3000/visits', visit, {headers: this.headers});
  }
}
