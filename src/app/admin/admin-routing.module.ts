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

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'postTechnician', component: PostTechnicianComponent},
  { path: 'postTest', component: PostTestComponent},
  { path: 'postPatient', component: PostPatientComponent},
  { path: 'viewTechnician', component: ViewTechnicianComponent},
  { path: 'viewAllUsers', component: ViewAllUsersComponent},
  { path: 'viewTestResults', component: ViewTestResultsComponent},
  { path: 'viewAllAppointments', component: ViewAllAppointmentsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
