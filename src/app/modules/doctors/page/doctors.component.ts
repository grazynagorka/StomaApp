import { Component, OnInit } from '@angular/core';
import { Doctors } from 'src/app/data/schema/doctors';
import { SessionUser } from 'src/app/data/schema/sessionUser';
import { AuthService } from 'src/app/data/service/auth.service';
import { DoctorsService } from 'src/app/data/service/doctors.service';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  doctors: Doctors;
  currentUser: SessionUser;

  constructor(private doctorsService: DoctorsService, private authService: AuthService) {
    this.authService.currentUser.subscribe(x=>this.currentUser = x);
   }


  ngOnInit() {
    this.doctorsService.getDoctorsList().subscribe(data =>{
      this.doctors=data;
      console.log(data)
    }, err => {
      console.log('Nie ma lekarzy');
    })
  }

  


}
