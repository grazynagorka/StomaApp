import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionUser } from 'src/app/data/schema/sessionUser';
import { Visit } from 'src/app/data/schema/visits';
import { AuthService } from 'src/app/data/service/auth.service';
import { VisitsService } from 'src/app/data/service/visits.service';


@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent implements OnInit {
  @Input() visit: Visit;
  currentUser: SessionUser;
  


  constructor( private visitsService: VisitsService,
    private route: ActivatedRoute,
    private location: Location,
    private authService: AuthService,
    ) {
      this.authService.currentUser.subscribe(x=>this.currentUser = x);
     }

  ngOnInit() {
    this.getVisitInfoById();
  }

  getVisitInfoById(){
    const _id = this.route.snapshot.paramMap.get('id');
    this.visitsService.getVisitById(_id).subscribe( data => {
      this.visit = data;
      console.log(data);
    }, err =>{
      console.log('Błąd wczytywania');
    })
  }



  updateVisit() {
    let updatedVisit = {
      description: this.visit.visit.description,
      assistantId: this.currentUser.id
    }
    this.visitsService.updateVisits(updatedVisit, this.visit.visit._id).subscribe(data => {
    this.visit = data;
    console.log('udało sie');
    }, err => {
    console.log(err);
    })
  }

  goBack(){
    this.location.back();
  }
}
