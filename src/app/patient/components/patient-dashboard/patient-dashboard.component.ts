import { Component } from '@angular/core';
import { PatientService } from '../../service/patient.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.css'
})
export class PatientDashboardComponent {

  appointmentss: any[] = [];

  searchAppointmentForm!: FormGroup;

  constructor (
    private patientService: PatientService,
    private fb: FormBuilder,
    private sanckbar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllAppoimtments();
    this.searchAppointmentForm = this.fb.group({
      title: [null, [Validators.required]]
    })
  }

  getAllAppoimtments(){
    this.appointmentss = [];
    this.patientService.getAllAppointments().subscribe(res => {
      res.forEach(element => {
        this.appointmentss.push(element);
      });
      console.log(this.appointmentss);
    })
  }

  submitForm(){
    this.appointmentss = [];
    const title = this.searchAppointmentForm.get('title')!.value;
    this.patientService.getAllAppointmentsByName(title).subscribe(res => {
      res.forEach(element => {
        this.appointmentss.push(element);
      });
      console.log(this.appointmentss);
    })
  }

}
