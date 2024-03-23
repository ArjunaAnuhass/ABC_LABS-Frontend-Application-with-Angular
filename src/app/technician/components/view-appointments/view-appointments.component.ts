import { Component } from '@angular/core';
import { TechnicianService } from '../../service/technician.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrl: './view-appointments.component.css'
})
export class ViewAppointmentsComponent {

  appointmentss: any;
  dataSource: any;

  constructor (
    private technicianService: TechnicianService,
  ) {}

  
  

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllTestsResults();
  }

  getAllTestsResults(){
    this.technicianService.getAllAppointments().subscribe(res => {
      this.appointmentss = res;
    })
  }

}
