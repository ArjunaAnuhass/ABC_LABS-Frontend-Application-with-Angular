import { Component } from '@angular/core';
import { PatientService } from '../../service/patient.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrl: './view-patient.component.css'
})
export class ViewPatientComponent {

  patients: any;
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
    this.patientService.getAllPatients().subscribe(res => {
      this.patients = res;
    })
  }

}
