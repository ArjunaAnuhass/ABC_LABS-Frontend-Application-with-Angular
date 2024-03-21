import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminServiceService } from '../../service/admin-service.service';

@Component({
  selector: 'app-post-test',
  templateUrl: './post-test.component.html',
  styleUrl: './post-test.component.css'
})
export class PostTestComponent {

  testForm: FormGroup;
  listOfTechnicians: any = [];

  constructor (
    private fb: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar,
    private adminService: AdminServiceService,
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
  }

  getAllTechnicians(){
    this.adminService.getAllTechnician().subscribe(res => {
      this.listOfTechnicians = res;
    })
  }

  addTest(){
    if(this.testForm.valid){
      const formData: FormData = new FormData();
      
      formData.append('techId', this.testForm.get('techId').value);
      formData.append('testName', this.testForm.get('testName').value);
      formData.append('description', this.testForm.get('description').value);
      formData.append('price', this.testForm.get('price').value);

      this.adminService.postTest(formData).subscribe(
        (res) => {
          if(res.testId != null){
            this.snackbar.open("Test Created Successfully.", 'Close', { duration: 5000 });
            this.router.navigateByUrl('/admin/dashboard');
          }
          else{
            this.snackbar.open("Fail to add Test!", 'Close', { duration: 5000 });
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
