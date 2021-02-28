import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assistants } from '../schema/assistants';

@Injectable({
  providedIn: 'root'
})
export class AssistantsService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    "authorization": `Bearer ${localStorage.getItem("token")}`
  });

  constructor(private http: HttpClient) { }

  baseUrl='http://localhost:3000/users';

  public getAssistantsList(): Observable<Assistants> {
    return this.http.get<Assistants>('http://localhost:3000/users?job=assistant', {headers: this.headers});
  }

  public deleteAssistant(_id: string): Observable<Assistants> {
    const url= `${this.baseUrl}/${_id}`;
    return this.http.delete<Assistants>(url, {headers: this.headers})
  }
  
}

