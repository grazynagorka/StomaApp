import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Users } from 'src/app/data/schema/users';
import { DoctorsService } from 'src/app/data/service/doctors.service';
import { AdminComponent } from '../admin.component';



@Component({
  selector: 'app-add-doctor',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addDoctorForm: FormGroup;
  user: Users;

  
  selected = 'no';

  constructor(public dialogRef: MatDialogRef<AdminComponent>,
    private formBuilder: FormBuilder,
    private doctorsService: DoctorsService ) { }

  ngOnInit() {
    this.addDoctorForm = this.formBuilder.group({
      firstname:[''],
      lastname:[''],
      email: [''],
      password: [''],
      specialization: ['']
    });

    //inicjalizacja
    this.user = new Users;
    this.user.users ={
      firstName:'', lastName:'', email:'', password:'', job:'doctor', specialization:''
    };
  }

  get f() {return this.addDoctorForm.controls;}

  addDoctor(){
    console.log('wchodze');

    this.user.users.firstName = this.f.firstname?.value;
    this.user.users.lastName = this.f.lastname?.value;
    this.user.users.email = this.f.email?.value;
    this.user.users.password = this.f.password?.value;
    this.user.users.specialization=this.f.specialization?.value;

    console.log(this.user);

    this.doctorsService.addPersonel(this.user).subscribe(data => {
      console.log('dodano');
      this.dialogRef.close();
    }, err =>{
      console.log('nie dodano');
    })
  }
  
  cancel(){
    this.dialogRef.close();
  }
  
  
}
