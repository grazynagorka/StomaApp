import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/data/schema/doctors';
import { DoctorsService } from 'src/app/data/service/doctors.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: string;
  @Input() doctor: Doctor


  constructor( private doctorsService: DoctorsService, 
    private route: ActivatedRoute, 
    private location: Location) {
    
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
  
  updateDoctor() {
    this.doctorsService.updateDoctor(this.doctor).subscribe(data => this.goBack(),
    err => {
      console.log(err);
    })
  }
  
  goBack(){
    this.location.back();
  }

}


