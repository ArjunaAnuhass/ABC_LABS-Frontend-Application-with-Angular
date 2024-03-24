import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicianComponent } from './technician.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { ViewTestComponent } from './components/view-test/view-test.component';
import { PostTestComponent } from './components/post-test/post-test.component';

const routes: Routes = [
  { path: '', component: TechnicianComponent },
  { path: 'viewAppointments', component: ViewAppointmentsComponent},
  { path: 'viewAllTests', component: ViewTestComponent},
  { path: 'postTest', component: PostTestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicianRoutingModule { }
