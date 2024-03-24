import { Component } from '@angular/core';
import { TechnicianService } from '../../service/technician.service';

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrl: './view-test.component.css'
})
export class ViewTestComponent {

  tests: any;
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
    this.technicianService.getAllTests().subscribe(res => {
      this.tests = res;
    })
  }

}
