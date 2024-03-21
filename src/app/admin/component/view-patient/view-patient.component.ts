import { Component } from '@angular/core';
import { AdminServiceService } from '../../service/admin-service.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrl: './view-patient.component.css'
})
export class ViewPatientComponent {

  patients: any;

  constructor(
    private adminService: AdminServiceService,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.viewPatients();
  }

  viewPatients(){
    this.adminService.getAllPatients().subscribe(res => {
      this.patients = res;
    })
  }

}
