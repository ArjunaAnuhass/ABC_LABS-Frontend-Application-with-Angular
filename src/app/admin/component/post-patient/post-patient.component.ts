import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminServiceService } from '../../service/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-patient',
  templateUrl: './post-patient.component.html',
  styleUrl: './post-patient.component.css'
})
export class PostPatientComponent {

  patientForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private adminService: AdminServiceService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.patientForm = this.fb.group({
      fullname: [null, [Validators.required]],
      address: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      medicalHistory: [null, [Validators.required]],
    })
  }

  addPatient(): void{
    if(this.patientForm.valid) {
      this.adminService.postPatient(this.patientForm.value).subscribe(
        (response) => {
          if(response.id != null){
            this.snackbar.open('Patient Added Successfully.', 'Close', { duration: 5000});
            this.router.navigateByUrl('admin/viewPatient');
          }
          else{
            this.snackbar.open('Error to add Patient!','ERROR', { duration: 5000 });
          }
        }
      )
    }
    else{
      this.patientForm.markAllAsTouched();
    }
  }
  

}
