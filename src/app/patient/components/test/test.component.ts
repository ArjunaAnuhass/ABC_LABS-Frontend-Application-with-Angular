import { Component } from '@angular/core';
import { PatientService } from '../../service/patient.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  tests: any;
  dataSource: any;

  constructor (
    private patientService: PatientService,
  ) {}

  
  

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllTests();
  }

  getAllTests(){
    this.patientService.getAllTest().subscribe(res => {
      this.tests = res;
    })
  }

}
