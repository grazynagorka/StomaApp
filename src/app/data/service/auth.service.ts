import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from '../schema/users';
import jwt_decode from 'jwt-decode';
import { SessionUser } from '../schema/sessionUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<SessionUser>;
  public currentUser: Observable<SessionUser>

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<SessionUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
 }

 public get currentUserValue(): any {
   return this.currentUserSubject.value;
 }

  public logIn(email: string, password: string){
    return this.http.post<any>('http://localhost:3000/login', {email, password}, {headers: this.headers})
      .pipe(map(user=> {
        let decodedUser = new SessionUser;
        decodedUser = jwt_decode(user.token);
        localStorage.setItem("token", user.token);
        console.log(decodedUser);
        localStorage.setItem('currentUser', JSON.stringify(decodedUser));
        this.currentUserSubject.next(decodedUser);
        return decodedUser;
      }
        ))
  };

  public createUser(user: Users) {
    return this.http.post<any>('http://localhost:3000/register', user.users, {headers: this.headers})
  }

  logOut(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  }

