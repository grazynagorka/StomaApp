import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/data/schema/users';
import { AuthService } from 'src/app/data/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  submitted = false;
  passwordRepeat: any;
  user: Users;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_repeat: ['', Validators.required]
    });

    //inicjalizacja putego obiektu uzytkownika do samodzielnej rejestacji o domyslnej job
    this.user = new Users;
    this.user.users = {
      firstName:'', lastName:'', email:'', password:'', job:'patient'
    };
  }

  get f() {return this.registerForm.controls;}

  register() {
    console.log('wchodze');
    this.submitted=true;

    if (this.registerForm.invalid) {
      return;
    }

    this.user.users.firstName = this.f.firstname.value;
    this.user.users.lastName = this.f.lastname.value;
    this.user.users.email = this.f.email.value;
    this.user.users.password = this.f.password.value;

    console.log(this.user);

    this.authService.createUser(this.user).subscribe(data => {
      console.log('Dodano użytkownika');
      this.router.navigate(['home']);
    }, err => {
      console.log('Nie udało się dodać użytkownika');
    })

  }
}
