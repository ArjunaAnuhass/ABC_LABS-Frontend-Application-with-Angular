import { Component } from '@angular/core';
import { PatientService } from '../../service/patient.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrl: './view-doctor.component.css'
})
export class ViewDoctorComponent {

  doctors: any;
  dataSource: any;

  constructor (
    private patientService: PatientService,
  ) {}

  
  

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllTestsResults();
  }

  getAllTestsResults(){
    this.patientService.getAllDoctors().subscribe(res => {
      this.doctors = res;
    })
  }

}
