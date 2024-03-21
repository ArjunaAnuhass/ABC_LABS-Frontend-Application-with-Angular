import { Component } from '@angular/core';
import { AdminServiceService } from '../../service/admin-service.service';

@Component({
  selector: 'app-view-all-appointments',
  templateUrl: './view-all-appointments.component.html',
  styleUrl: './view-all-appointments.component.css'
})
export class ViewAllAppointmentsComponent {

  appointmentss: any;

  constructor (
    private adminService: AdminServiceService,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllAppointments();
  }

  getAllAppointments(){
    this.adminService.getAllAppointment().subscribe(res => {
      this.appointmentss = res;
    })
  }

}
