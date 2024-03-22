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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemoAngularMaterialModule } from '../DemoAngularMaterialModule';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UpdateTestComponent } from './component/update-test/update-test.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import { PostDoctorComponent } from './component/post-doctor/post-doctor.component';
import { ViewDoctorsComponent } from './component/view-doctors/view-doctors.component';
import { ViewPatientComponent } from './component/view-patient/view-patient.component';
import { UpdateAppointmentComponent } from './component/update-appointment/update-appointment.component';


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
    ViewAllAppointmentsComponent,
    UpdateTestComponent,
    UpdateUserComponent,
    PostDoctorComponent,
    ViewDoctorsComponent,
    ViewPatientComponent,
    UpdateAppointmentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DemoAngularMaterialModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class AdminModule { }
