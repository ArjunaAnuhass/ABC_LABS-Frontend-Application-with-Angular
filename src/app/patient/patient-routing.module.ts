import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';
import { DashboardComponent } from '../admin/component/dashboard/dashboard.component';
import { PostAppointmentComponent } from './components/post-appointment/post-appointment.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';

const routes: Routes = [
  { path: '', component: PatientComponent },
  { path: 'patientDashboard', component: PatientDashboardComponent},
  { path: 'postAppointment', component: PostAppointmentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
