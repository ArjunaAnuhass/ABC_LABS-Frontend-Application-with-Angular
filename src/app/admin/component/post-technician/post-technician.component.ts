import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminServiceService } from '../../service/admin-service.service';
import { response } from 'express';

@Component({
  selector: 'app-post-technician',
  templateUrl: './post-technician.component.html',
  styleUrl: './post-technician.component.css'
})
export class PostTechnicianComponent {

  technicianForm!: FormGroup;

  constructor (
    private fb: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar,
    private adminService: AdminServiceService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.technicianForm = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      specialization: [null, [Validators.required]],
    })
  }

  addTechnician(): void{
    if(this.technicianForm.valid) {
      this.adminService.addTechnician(this.technicianForm.value).subscribe(
        (response) => {
          if(response.technicianId != null){
            this.snackbar.open('Technician Added Successfully.', 'Close', { duration: 5000});
            this.router.navigateByUrl('admin/dashboard');
          }
          else{
            this.snackbar.open('Error to add Technician!','ERROR', { duration: 5000 });
          }
        }
      )
    }
    else{
      this.technicianForm.markAllAsTouched();
    }
  }

}
