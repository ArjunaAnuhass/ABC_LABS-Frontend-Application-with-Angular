import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminServiceService } from '../../service/admin-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrl: './update-test.component.css'
})
export class UpdateTestComponent {

  testId = this.activatedRoute.snapshot.params['testId'];

  testForm: FormGroup;
  listOfTechnicians: any = [];

  constructor (
    private fb: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar,
    private adminService: AdminServiceService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.testForm = this.fb.group({
      techId: [null, [Validators.required]],
      testName: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
    });

    this.getAllTechnicians();
    this.getTestById();
  }

  getAllTechnicians(){
    this.adminService.getAllTechnician().subscribe(res => {
      this.listOfTechnicians = res;
    })
  }

  getTestById(){
    this.adminService.getAllTestById(this.testId).subscribe(res => {
      this.testForm.patchValue(res);
    })
  }

  updateProduct(){
    if(this.testForm.valid){
      const formData: FormData = new FormData();
      
      formData.append('techId', this.testForm.get('techId').value);
      formData.append('testName', this.testForm.get('testName').value);
      formData.append('description', this.testForm.get('description').value);
      formData.append('price', this.testForm.get('price').value);

      this.adminService.updateTest(this.testId, formData).subscribe(
        (res) => {
          if(res.testId != null){
            this.snackbar.open("Test Updated Successfully.", 'Close', { duration: 5000 });
            this.router.navigateByUrl('/admin/dashboard');
          }
          else{
            this.snackbar.open("Fail to Update Test!", 'Close', { duration: 5000 });
          }
        }
      )
    }
    else{
      for(const i in this.testForm.controls){
        this.testForm.controls[i].markAsDirty();
        this.testForm.controls[i].updateValueAndValidity();
      }
    }
  }

}
