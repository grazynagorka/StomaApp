import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminComponent } from './page/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddComponent } from './page/add/add.component';
import { EditComponent } from './page/edit/edit.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAssistantComponent } from './page/add-assistant/add-assistant.component';


@NgModule({
  declarations: [AdminComponent, AddComponent, EditComponent, AddAssistantComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MaterialModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule {
}
