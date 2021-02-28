import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/service/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(){
  }

  logIn(form: NgForm){
    let email=form.value.email; 
    let password=form.value.password;
    this.authService.logIn(email, password).subscribe(data =>{
      this.router.navigate(['profile']);
    }, err=>{
      console.log('Niepoprawne logowanie');
    }
    )
  }

  
}

