import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from '../../service/admin-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {

  id = this.activateRoute.snapshot.params['id'];

  patientForm: FormGroup;

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
    this.patientForm = this.fb.group({
      fullname: [null, [Validators.required]],
      address: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      medicalHistory: [null, [Validators.required]],
    })
    this.getPatientById();
    this.updatePatient();
  }

  getPatientById(){
    this.adminService.getAllPatientById(this.id).subscribe(res => {
      this.patientForm.patchValue(res);
    })
  }

  updatePatient(){
    if(this.patientForm.valid){
      const formData: FormData = new FormData();
      
      formData.append('fullname', this.patientForm.get('fullname').value);
      formData.append('address', this.patientForm.get('address').value);
      formData.append('email', this.patientForm.get('email').value);
      formData.append('phone', this.patientForm.get('phone').value);
      formData.append('medicalHistory', this.patientForm.get('medicalHistory').value);

      this.adminService.updatePatient(this.id, formData).subscribe(
        (res) => {
          if(res.id != null){
            this.snackbar.open("Patient Updated Successfully.", 'Close', { duration: 5000 });
            this.router.navigateByUrl('/admin/viewPatient');
          }
          else{
            this.snackbar.open("Fail to Update Patient!", 'Close', { duration: 5000 });
          }
        }
      )
    }
    else{
      for(const i in this.patientForm.controls){
        this.patientForm.controls[i].markAsDirty();
        this.patientForm.controls[i].updateValueAndValidity();
      }
    }
  }

}
