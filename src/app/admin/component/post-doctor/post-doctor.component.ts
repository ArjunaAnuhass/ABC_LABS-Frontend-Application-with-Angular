import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../../service/admin-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-doctor',
  templateUrl: './post-doctor.component.html',
  styleUrl: './post-doctor.component.css'
})
export class PostDoctorComponent {

  doctorForm!: FormGroup;

  constructor (
    private fb: FormBuilder,
    private router: Router,
    private adminService: AdminServiceService,
    private snackbar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.doctorForm = this.fb.group({
      fullname: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      specialization: [null, [Validators.required]],
    })
  }


  addDoctor(): void{
    if(this.doctorForm.valid) {
      this.adminService.postDoctor(this.doctorForm.value).subscribe(
        (response) => {
          if(response.id != null){
            this.snackbar.open('Doctor Added Successfully.', 'Close', { duration: 5000});
            this.router.navigateByUrl('admin/viewAllDoctors');
          }
          else{
            this.snackbar.open('Error to add Doctor!','ERROR', { duration: 5000 });
          }
        }
      )
    }
    else{
      this.doctorForm.markAllAsTouched();
    }
  }

}
