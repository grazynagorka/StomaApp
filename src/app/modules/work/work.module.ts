import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRoutingModule } from './work-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkComponent } from './page/work.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { MatTableModule } from '@angular/material/table';
import { TreatmentComponent } from './page/treatment/treatment.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [WorkComponent, TreatmentComponent],
  imports: [
    CommonModule,
    WorkRoutingModule,
    SharedModule,
    MaterialModule,
    MatTableModule,
    FormsModule,
  ]
})
export class WorkModule { }
