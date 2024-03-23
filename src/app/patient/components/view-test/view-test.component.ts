import { Component } from '@angular/core';
import { PatientService } from '../../service/patient.service';

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrl: './view-test.component.css'
})
export class ViewTestComponent {

  resultss: any;
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
    this.patientService.getAllResults().subscribe(res => {
      this.resultss = res;
    })
  }

}
