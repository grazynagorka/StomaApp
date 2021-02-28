import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Users } from 'src/app/data/schema/users';
import { DoctorsService } from 'src/app/data/service/doctors.service';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-add-assistant',
  templateUrl: './add-assistant.component.html',
  styleUrls: ['./add-assistant.component.scss']
})
export class AddAssistantComponent implements OnInit {
  addAssistantForm: FormGroup;
  user: Users;

  constructor(public dialogRef: MatDialogRef<AdminComponent>,
    private formBuilder: FormBuilder,
    private doctorsService: DoctorsService ) { }

  ngOnInit() {
    this.addAssistantForm = this.formBuilder.group({
      firstname:[''],
      lastname:[''],
      email: [''],
      password: [''],
      specialization: ['']
    });

    this.user = new Users;
    this.user.users ={
      firstName:'', lastName:'', email:'', password:'', job:'assistant'
    };
  }

  get f() {return this.addAssistantForm.controls;}

  addAssistant(){
    console.log('wchodze');

    this.user.users.firstName = this.f.firstname?.value;
    this.user.users.lastName = this.f.lastname?.value;
    this.user.users.email = this.f.email?.value;
    this.user.users.password = this.f.password?.value;

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
