import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PostTechnicianComponent } from './component/post-technician/post-technician.component';
import { PostTestComponent } from './component/post-test/post-test.component';
import { PostPatientComponent } from './component/post-patient/post-patient.component';
import { ViewTechnicianComponent } from './component/view-technician/view-technician.component';
import { ViewAllUsersComponent } from './component/view-all-users/view-all-users.component';
import { ViewTestResultsComponent } from './component/view-test-results/view-test-results.component';
import { ViewAllAppointmentsComponent } from './component/view-all-appointments/view-all-appointments.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PostTechnicianComponent,
    PostTestComponent,
    PostPatientComponent,
    ViewTechnicianComponent,
    ViewAllUsersComponent,
    ViewTestResultsComponent,
    ViewAllAppointmentsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
