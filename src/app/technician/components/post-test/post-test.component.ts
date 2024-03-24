import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TechnicianService } from '../../service/technician.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-test',
  templateUrl: './post-test.component.html',
  styleUrl: './post-test.component.css'
})
export class PostTestComponent {

  resultsForm!: FormGroup;

  constructor (
    private fb: FormBuilder,
    private router: Router,
    private technicianService: TechnicianService,
    private snackbar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.resultsForm = this.fb.group({
      testName: [null, [Validators.required]],
      patientName: [null, [Validators.required]],
      result: [null, [Validators.required]],
      comment: [null, [Validators.required]],
      appointmentName: [null, [Validators.required]],
    })
  }


  addResult(): void{
    if(this.resultsForm.valid) {
      this.technicianService.postResult(this.resultsForm.value).subscribe(
        (response) => {
          if(response.id != null){
            this.snackbar.open('Results Added Successfully.', 'Close', { duration: 5000});
            this.router.navigateByUrl('technician/getAllResults');
          }
          else{
            this.snackbar.open('Error to add Results!','ERROR', { duration: 5000 });
          }
        }
      )
    }
    else{
      this.resultsForm.markAllAsTouched();
    }
  }

}
