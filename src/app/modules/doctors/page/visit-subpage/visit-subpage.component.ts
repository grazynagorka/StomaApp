import { Component, OnInit, Injectable, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Doctor } from 'src/app/data/schema/doctors';
import { SessionUser } from 'src/app/data/schema/sessionUser';
import { AuthService } from 'src/app/data/service/auth.service';
import { DoctorsService } from 'src/app/data/service/doctors.service';
import { VisitsService } from 'src/app/data/service/visits.service';


@Component({
  selector: 'app-visit-subpage',
  templateUrl: './visit-subpage.component.html',
  styleUrls: ['./visit-subpage.component.scss'],
})


export class VisitSubpageComponent implements OnInit {
  doctor: Doctor;
  currentUser: SessionUser;
  formTime: any;
  formDate: any;
  
  //filtrowanie kalendarza
  minDate = new Date();
  dateFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Brak możliwości wybrania dnia w weekendzie
    return day !== 0 && day !== 6;
  }

  constructor(
    private route: ActivatedRoute,
    private doctorsService: DoctorsService,
    private authService: AuthService,
    private visitsService: VisitsService,
  ) { 
    this.authService.currentUser.subscribe(x=>this.currentUser = x);
  }

  ngOnInit() {
    this.getDoctorByRoute();
  }

  getDoctorByRoute() {
    const _id = this.route.snapshot.paramMap.get('id');
    this.doctorsService.getDoctorById(_id).subscribe( data => {
      this.doctor = data;
      console.log(data);
    }, err =>{
      console.log('Błąd wczytywania');
    })

  }

  addVisit(){
    this.formDate= moment(this.formDate).format('YYYY-MM-DD');
    let visitDateTime = this.formDate + ' ' + this.formTime;
    visitDateTime = moment(visitDateTime).toISOString();
    let visit = {
      isoDate: visitDateTime,
      patientId: this.currentUser.id,
      doctorId: this.doctor.user._id
    }
    this.visitsService.addVisit(visit).subscribe(data => {
      console.log('Dodanooo');
    }, err =>{
      console.log(err);
    })
  }
  

}
