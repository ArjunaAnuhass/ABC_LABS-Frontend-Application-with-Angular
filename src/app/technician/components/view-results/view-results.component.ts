import { Component } from '@angular/core';
import { TechnicianService } from '../../service/technician.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
    private snackbar: MatSnackBar,
    private router: Router,
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

  deleteResult(id: any){
    this.technicianService.deleteResults(id).subscribe(res => {
      if(res.body == null){
        this.snackbar.open('Test Result Deleted Sucessfully.', 'Close', { duration: 5000 });
        this.router.navigateByUrl('technician/getAllResults');
      }
      else{
        this.snackbar.open('Test Result Delete Unsuccessfull! Try Again', 'Close', { duration: 5000, panelClass: 'error-snackbar'});
      }
    })
  }

}
