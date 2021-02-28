import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './page/doctors.component';
import { DoctorsRoutingModule } from './doctors-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VisitSubpageComponent } from './page/visit-subpage/visit-subpage.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerComponent, NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DoctorsComponent, VisitSubpageComponent],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    SharedModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    FormsModule
    ]
})
export class DoctorsModule {
}
