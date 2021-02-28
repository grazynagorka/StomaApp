import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Doctors } from 'src/app/data/schema/doctors';
import { Users } from 'src/app/data/schema/users';
import { DoctorsService } from 'src/app/data/service/doctors.service';
import { AddAssistantComponent } from './add-assistant/add-assistant.component';
import { AddComponent } from './add/add.component';
import { SessionUser } from 'src/app/data/schema/sessionUser';
import { AuthService } from 'src/app/data/service/auth.service';
import { AssistantsService } from 'src/app/data/service/assistants.service';
import { Assistants } from 'src/app/data/schema/assistants';
import { UsersService } from 'src/app/data/service/users.service';
import { AdministatorsService } from 'src/app/data/service/administators.service';
import { Administrators } from 'src/app/data/schema/administrators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  showDoctorsList: boolean = false;
  showAssistantsList: boolean = false;
  showPatientsList: boolean = false;
  showAdminsList: boolean = false;
  doctors: Doctors;
  assistants: Assistants;
  user: Users;
  admins: Administrators;
  currentUser: SessionUser;

  constructor(public dialog: MatDialog,
    private doctorsService: DoctorsService,
    private router: Router,
    private authService: AuthService,
    private assistantsService: AssistantsService,
    private usersService: UsersService,
    private adminService: AdministatorsService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.getDoctorsList();
    this.getAssistantsList();
    this.getPatientsList();
    this.getAdminsList();
  }


  //*****************DOCTOR*********************

  addDoctor() {
    this.dialog.open(AddComponent);
  }

  getDoctorsList() {
    this.doctorsService.getDoctorsList().subscribe(data => {
      this.doctors = data;
    }, err => {
      console.log('Brak lekarzy');
    })
  }

  openDoctorsList() {
    this.showDoctorsList = !this.showDoctorsList;
    this.ngOnInit();
  }

  editDoctor() {
    this.router.navigate(['/edit']);
    //this.router.navigate[('/edit', this.user.users._id)];
  }

  deleteDoctor(_id: string): void {
    this.doctorsService.deleteDoctor(_id).subscribe(_ => {
      this.doctors = this.doctors;
      this.ngOnInit();
    })
  }

  //*******************ASSISTANT*****************

  addAssistant() {
    this.dialog.open(AddAssistantComponent);
  }

  getAssistantsList() {
    this.assistantsService.getAssistantsList().subscribe(eachAssistant => {
      this.assistants = eachAssistant;
    }, err => {
      console.log('Brak asystantów');
    })
  }

  editAssistantsList() {
    this.showAssistantsList = !this.showAssistantsList;
    this.ngOnInit();
  }

  deleteAssistant(_id: string) {
    this.assistantsService.deleteAssistant(_id).subscribe(_ => {
      this.assistants = this.assistants;
      this.ngOnInit();
    })
  }

  //******************PATIENTS**************

  getPatientsList() {
    this.usersService.getUsersList().subscribe(eachPatient => {
      this.user = eachPatient;
    })
  }

  editPatientList() {
    this.showPatientsList = !this.showPatientsList;
    this.ngOnInit();
  }

  deletePatient(_id: string) {
    this.usersService.deletePatient(_id).subscribe(_ => {
      this.user = this.user;
      this.ngOnInit();
    })
  }
  //*****************ADMIN*************
  getAdminsList() {
    this.adminService.getAdminsList().subscribe(eachAdmin => {
      this.admins = eachAdmin;
    })
  }

  getAllAdminsList() {
    this.showAdminsList = !this.showAdminsList;
    this.ngOnInit();
  }

  makeAdmin(_id) {
    this.adminService.makeAdmin(_id).subscribe(data => {
      this.admins = data;
    })
  }
}
