import { Component } from '@angular/core';
import { TechnicianService } from '../../service/technician.service';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrl: './view-patients.component.css'
})
export class ViewPatientsComponent {

  patients: any;

  constructor(
    private technicianService: TechnicianService,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.viewPatients();
  }

  viewPatients(){
    this.technicianService.getAllPatients().subscribe(res => {
      this.patients = res;
    })
  }

}
