import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicianComponent } from './technician.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { ViewTestComponent } from './components/view-test/view-test.component';

const routes: Routes = [
  { path: '', component: TechnicianComponent },
  { path: 'viewAppointments', component: ViewAppointmentsComponent},
  { path: 'viewAllTests', component: ViewTestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicianRoutingModule { }
