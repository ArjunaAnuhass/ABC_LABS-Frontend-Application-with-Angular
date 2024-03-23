import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from '../../service/admin-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrl: './update-doctor.component.css'
})
export class UpdateDoctorComponent {

  id = this.activateRoute.snapshot.params['id'];

  doctorForm: FormGroup;

  constructor (
    private fb: FormBuilder,
    private adminService: AdminServiceService,
    private router: Router,
    private snackbar: MatSnackBar,
    private activateRoute: ActivatedRoute,
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
    this.getDoctorById();
    this.updateDoctor();
  }

  getDoctorById(){
    this.adminService.getAllDoctorById(this.id).subscribe(res => {
      this.doctorForm.patchValue(res);
    })
  }

  updateDoctor(){
    if(this.doctorForm.valid){
      const formData: FormData = new FormData();
      
      formData.append('fullname', this.doctorForm.get('fullname').value);
      formData.append('email', this.doctorForm.get('email').value);
      formData.append('phone', this.doctorForm.get('phone').value);
      formData.append('specialization', this.doctorForm.get('specialization').value);

      this.adminService.updateDoctor(this.id, formData).subscribe(
        (res) => {
          if(res.id != null){
            this.snackbar.open("Doctor Updated Successfully.", 'Close', { duration: 5000 });
            this.router.navigateByUrl('/admin/viewAllDoctors');
          }
          else{
            this.snackbar.open("Fail to Update Doctor!", 'Close', { duration: 5000 });
          }
        }
      )
    }
    else{
      for(const i in this.doctorForm.controls){
        this.doctorForm.controls[i].markAsDirty();
        this.doctorForm.controls[i].updateValueAndValidity();
      }
    }
  }

}
