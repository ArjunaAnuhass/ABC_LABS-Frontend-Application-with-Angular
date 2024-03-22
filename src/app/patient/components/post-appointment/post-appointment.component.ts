import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PatientService } from '../../service/patient.service';
import { response } from 'express';

@Component({
  selector: 'app-post-appointment',
  templateUrl: './post-appointment.component.html',
  styleUrl: './post-appointment.component.css'
})
export class PostAppointmentComponent {

  appointmentForm!: FormGroup;

  constructor (
    private fb: FormBuilder,
    private patientService: PatientService,
    private router: Router,
    private snackbar: MatSnackBar,
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
  }

  addAppointment(): void{
    if (this.appointmentForm.valid){
      this.patientService.postAppointment(this.appointmentForm.value).subscribe(
        (response) => {
          if(response.id != null){
            this.snackbar.open('Appointment Added Successfully.', 'Close', { duration: 5000});
            this.router.navigateByUrl('');
          }
          else{
            this.snackbar.open('Error to add Appointment!','ERROR', { duration: 5000 });
          }
        }
      )
    }
    else{
      this.appointmentForm.markAllAsTouched();
    }
  }

}
