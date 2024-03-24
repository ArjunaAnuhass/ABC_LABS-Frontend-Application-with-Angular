import { Component } from '@angular/core';
import { TechnicianService } from '../../service/technician.service';

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrl: './view-results.component.css'
})
export class ViewResultsComponent {

  resultss: any;
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
    this.technicianService.getAllResults().subscribe(res => {
      this.resultss = res;
    })
  }

}
