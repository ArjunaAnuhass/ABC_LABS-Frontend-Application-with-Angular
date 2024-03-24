import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicianRoutingModule } from './technician-routing.module';
import { TechnicianComponent } from './technician.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { DemoAngularMaterialModule } from '../DemoAngularMaterialModule';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewTestComponent } from './components/view-test/view-test.component';


@NgModule({
  declarations: [
    TechnicianComponent,
    ViewAppointmentsComponent,
    ViewTestComponent
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
