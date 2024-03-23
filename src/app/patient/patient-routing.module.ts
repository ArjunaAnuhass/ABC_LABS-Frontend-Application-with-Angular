import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';
import { DashboardComponent } from '../admin/component/dashboard/dashboard.component';
import { PostAppointmentComponent } from './components/post-appointment/post-appointment.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { ViewTestComponent } from './components/view-test/view-test.component';
import { ViewDoctorComponent } from './components/view-doctor/view-doctor.component';
import { ViewPatientComponent } from './components/view-patient/view-patient.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: '', component: PatientComponent },
  { path: 'patientDashboard', component: PatientDashboardComponent},
  { path: 'postAppointment', component: PostAppointmentComponent},
  { path: 'viewAllResults', component: ViewTestComponent},
  { path: 'viewAllDoctors', component: ViewDoctorComponent},
  { path: 'viewAllPatients', component: ViewPatientComponent},
  { path: 'updatePatient/:id', component: UpdatePatientComponent},
  { path: 'viewAllTests', component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
