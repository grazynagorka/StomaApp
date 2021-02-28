import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctors } from 'src/app/data/schema/doctors';
import { SessionUser } from 'src/app/data/schema/sessionUser';
import { Visits } from 'src/app/data/schema/visits';
import { AuthService } from 'src/app/data/service/auth.service';
import { DoctorsService } from 'src/app/data/service/doctors.service';
import { UsersService } from 'src/app/data/service/users.service';
import { VisitsService } from 'src/app/data/service/visits.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  showMe: boolean=false
  currentUser: SessionUser;
  doctors: Doctors;
  pastVisits: Visits;
  visits: any;

  constructor(private router: Router, 
    private authService: AuthService, 
    private doctorsService: DoctorsService,
    private visitsService: VisitsService,
    private usersService: UsersService,) {
    this.authService.currentUser.subscribe(x=>this.currentUser = x);
  }

  openList() {
    this.showMe=!this.showMe
  }

 logOut(){
   this.authService.logOut();
   this.router.navigate(['auth/login']);
  }

  ngOnInit() {  
    this.getDoctorsButtons();
    console.log(this.currentUser);
    this.getMyPersonalVisits();



  }

  getDoctorsButtons(){
    this.doctorsService.getDoctorsList().subscribe(data=>{
      this.doctors=data;
    }, err => {
      console.log('Brak lekarzy');
    });
  }

  getMyPersonalVisits(){
    this.visitsService.getPersonalVisits().subscribe(data =>{
      this.pastVisits=data;
      this.visits=this.pastVisits.pastVisits;
      console.log(this.visits);
    }, err => {
      console.log(err);
      this.ngOnInit();
    })
  }

 


}
