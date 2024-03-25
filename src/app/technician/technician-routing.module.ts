import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicianComponent } from './technician.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { ViewTestComponent } from './components/view-test/view-test.component';
import { PostTestComponent } from './components/post-test/post-test.component';
import { ViewResultsComponent } from './components/view-results/view-results.component';
import { UpdateResultsComponent } from './components/update-results/update-results.component';
import { ViewDoctorsComponent } from './components/view-doctors/view-doctors.component';
import { ViewPatientsComponent } from './components/view-patients/view-patients.component';

const routes: Routes = [
  { path: '', component: TechnicianComponent },
  { path: 'viewAppointments', component: ViewAppointmentsComponent},
  { path: 'viewAllTests', component: ViewTestComponent},
  { path: 'postTest', component: PostTestComponent},
  { path: 'getAllResults', component: ViewResultsComponent},
  { path: 'updateResults/:id', component: UpdateResultsComponent},
  { path: 'viewDoctors', component: ViewDoctorsComponent},
  { path: 'viewPatients', component: ViewPatientsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicianRoutingModule { }
