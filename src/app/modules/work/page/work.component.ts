import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TreatmentComponent } from './treatment/treatment.component';
import * as moment from 'moment';
import { DoctorsService } from 'src/app/data/service/doctors.service';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/data/schema/doctors';
import { VisitsService } from 'src/app/data/service/visits.service';
import { DoctorVisits, Visits } from 'src/app/data/schema/visits';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})

export class WorkComponent {
  today: string;
  doctor: Doctor;
  visits: DoctorVisits;
  date: string;

  // Brak możliwość wybrania poprzedniego dnia
  minDate = new Date();
  // Brak możliwości wybrania dnia w weekendzie
  dateFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }
  

  constructor(public dialog: MatDialog,
    private doctorsService: DoctorsService, 
    private route:ActivatedRoute,
    private visitsService: VisitsService) {
    //dzisiejsza data 
    let now = moment();
    this.today=now.locale("pl").format("dddd, L");
  }

  ngOnInit() { 
    this.getDoctorByRoute(); 
    this.getVisitByDoctorId();
  }

  getDoctorByRoute() {
    const _id = this.route.snapshot.paramMap.get('id');
    this.doctorsService.getDoctorById(_id).subscribe(data => {
      this.doctor = data;
    }, err =>{
      console.log('Błąd wczytywania');
    })

  }

  getVisitByDoctorId(){
    const _id = this.route.snapshot.paramMap.get('id');
    this.visitsService.getDoctorsVisit(_id, this.date).subscribe(data => {
      this.visits = data;
    }, err => {
      console.log(err);
    })
  }


  inputEvent(visitsDate){
    this.date = moment(visitsDate.value).format('DD-MM-YYYY');
    this.getVisitByDoctorId();
  }

  deleteVisit(_id) {
    this.visitsService.deleteVisit(_id).subscribe(_ => {
      this.visits = this.visits;
      this.ngOnInit();
    })
  }

 

}
