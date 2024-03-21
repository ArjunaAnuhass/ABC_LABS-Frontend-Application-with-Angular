import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AdminServiceService } from '../../service/admin-service.service';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-view-test-results',
  templateUrl: './view-test-results.component.html',
  styleUrl: './view-test-results.component.css'
})
export class ViewTestResultsComponent{

  resultss: any;
  dataSource: any;

  constructor (
    private adminService: AdminServiceService,
  ) {}

  
  

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllTestsResults();
  }

  getAllTestsResults(){
    this.adminService.getAllAppointmentResults().subscribe(res => {
      this.resultss = res;
    })
  }

}
