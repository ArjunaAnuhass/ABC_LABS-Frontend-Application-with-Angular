import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from '../../service/admin-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrl: './update-appointment.component.css'
})
export class UpdateAppointmentComponent {

  id = this.activateRoute.snapshot.params['id'];

  appointmentForm: FormGroup;

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
    this.appointmentForm = this.fb.group({
      appointmentName: [null, [Validators.required]],
      patientName: [null, [Validators.required]],
      appointmentDate: [null, [Validators.required]],
      testName: [null, [Validators.required]],
    })
    this.getAppointmentById();
    this.updateAppointments();
  }

  getAppointmentById(){
    this.adminService.getAllAppointmentById(this.id).subscribe(res => {
      this.appointmentForm.patchValue(res);
    })
  }

  updateAppointments(){
    if(this.appointmentForm.valid){
      const formData: FormData = new FormData();
      
      formData.append('appointmentName', this.appointmentForm.get('appointmentName').value);
      formData.append('patientName', this.appointmentForm.get('patientName').value);
      formData.append('appointmentDate', this.appointmentForm.get('appointmentDate').value);
      formData.append('testName', this.appointmentForm.get('testName').value);

      this.adminService.updateAppointment(this.id, formData).subscribe(
        (res) => {
          if(res.id != null){
            this.snackbar.open("Appointment Updated Successfully.", 'Close', { duration: 5000 });
            this.router.navigateByUrl('/admin/viewAllAppointments');
          }
          else{
            this.snackbar.open("Fail to Update Appointment!", 'Close', { duration: 5000 });
          }
        }
      )
    }
    else{
      for(const i in this.appointmentForm.controls){
        this.appointmentForm.controls[i].markAsDirty();
        this.appointmentForm.controls[i].updateValueAndValidity();
      }
    }
  }


}
