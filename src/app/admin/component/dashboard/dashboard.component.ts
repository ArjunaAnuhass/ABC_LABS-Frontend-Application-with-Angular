import { Component } from '@angular/core';
import { AdminServiceService } from '../../service/admin-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  tests: any[] = [];
  searchTestForm!: FormGroup;

  constructor (
    private adminService: AdminServiceService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllTests();
    this.searchTestForm = this.fb.group({
      title: [null, [Validators.required]]
    })
  }

  getAllTests(){
    this.tests = [];
    this.adminService.getAllTest().subscribe(res => {
      res.forEach(element => {
        this.tests.push(element);
      });
      console.log(this.tests);
    })
  }

  submitForm(){
    this.tests = [];
    const title = this.searchTestForm.get('title')!.value;
    this.adminService.getAllTestByName(title).subscribe(res => {
      res.forEach(element => {
        this.tests.push(element);
      });
      console.log(this.tests);
    })
  }

  deleteTest(testId: any){
    this.adminService.deleteTest(testId).subscribe(res => {
      if(res.body == null){
        this.snackbar.open('Test Delete Sucessfully.', 'Close', { duration: 5000 });
        return this.getAllTests();
      }
      else{
        this.snackbar.open('Test Delete Unsuccessfull! Try Again', 'Close', { duration: 5000, panelClass: 'error-snackbar'});
      }
    })
  }
}
