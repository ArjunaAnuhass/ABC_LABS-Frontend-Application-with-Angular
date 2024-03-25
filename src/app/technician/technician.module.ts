import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicianRoutingModule } from './technician-routing.module';
import { TechnicianComponent } from './technician.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { DemoAngularMaterialModule } from '../DemoAngularMaterialModule';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewTestComponent } from './components/view-test/view-test.component';
import { PostTestComponent } from './components/post-test/post-test.component';
import { ViewResultsComponent } from './components/view-results/view-results.component';
import { UpdateResultsComponent } from './components/update-results/update-results.component';
import { ViewDoctorsComponent } from './components/view-doctors/view-doctors.component';
import { ViewPatientsComponent } from './components/view-patients/view-patients.component';


@NgModule({
  declarations: [
    TechnicianComponent,
    ViewAppointmentsComponent,
    ViewTestComponent,
    PostTestComponent,
    ViewResultsComponent,
    UpdateResultsComponent,
    ViewDoctorsComponent,
    ViewPatientsComponent
  ],
  imports: [
    CommonModule,
    TechnicianRoutingModule,
    DemoAngularMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TechnicianModule { }
