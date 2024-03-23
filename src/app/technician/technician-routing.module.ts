import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicianComponent } from './technician.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';

const routes: Routes = [
  { path: '', component: TechnicianComponent },
  { path: 'viewAppointments', component: ViewAppointmentsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicianRoutingModule { }
