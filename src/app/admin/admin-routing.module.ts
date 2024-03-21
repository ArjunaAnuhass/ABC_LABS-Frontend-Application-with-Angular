import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PostTechnicianComponent } from './component/post-technician/post-technician.component';
import { PostTestComponent } from './component/post-test/post-test.component';
import { PostPatientComponent } from './component/post-patient/post-patient.component';
import { ViewTechnicianComponent } from './component/view-technician/view-technician.component';
import { ViewAllUsersComponent } from './component/view-all-users/view-all-users.component';
import { ViewTestResultsComponent } from './component/view-test-results/view-test-results.component';
import { ViewAllAppointmentsComponent } from './component/view-all-appointments/view-all-appointments.component';
import { UpdateTestComponent } from './component/update-test/update-test.component';
import { PostDoctorComponent } from './component/post-doctor/post-doctor.component';
import { ViewDoctorsComponent } from './component/view-doctors/view-doctors.component';
import { ViewPatientComponent } from './component/view-patient/view-patient.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'postTechnician', component: PostTechnicianComponent},
  { path: 'postTest', component: PostTestComponent},
  { path: 'postTest/:testId', component: UpdateTestComponent},
  { path: 'postPatient', component: PostPatientComponent},
  { path: 'viewTechnician', component: ViewTechnicianComponent},
  { path: 'viewAllUsers', component: ViewAllUsersComponent},
  { path: 'viewTestResults', component: ViewTestResultsComponent},
  { path: 'viewAllAppointments', component: ViewAllAppointmentsComponent},
  { path: 'postDoctor', component: PostDoctorComponent},
  { path: 'viewAllDoctors', component: ViewDoctorsComponent},
  { path: 'viewPatient', component: ViewPatientComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
