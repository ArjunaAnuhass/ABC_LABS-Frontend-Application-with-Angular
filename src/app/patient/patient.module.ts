import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { PostAppointmentComponent } from './components/post-appointment/post-appointment.component';
import { DemoAngularMaterialModule } from '../DemoAngularMaterialModule';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { ViewTestComponent } from './components/view-test/view-test.component';
import { ViewDoctorComponent } from './components/view-doctor/view-doctor.component';
import { ViewPatientComponent } from './components/view-patient/view-patient.component';


@NgModule({
  declarations: [
    PatientComponent,
    PostAppointmentComponent,
    PatientDashboardComponent,
    ViewTestComponent,
    ViewDoctorComponent,
    ViewPatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    DemoAngularMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PatientModule { }
