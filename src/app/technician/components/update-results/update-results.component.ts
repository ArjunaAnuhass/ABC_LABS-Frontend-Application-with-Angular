import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TechnicianService } from '../../service/technician.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-results',
  templateUrl: './update-results.component.html',
  styleUrl: './update-results.component.css'
})
export class UpdateResultsComponent {  
  
  id = this.activateRoute.snapshot.params['id'];

  resultsForm: FormGroup;

constructor (
  private fb: FormBuilder,
  private technicianService: TechnicianService,
  private router: Router,
  private snackbar: MatSnackBar,
  private activateRoute: ActivatedRoute,
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
  this.getResultsById();
  this.updateResults();
}

getResultsById(){
  this.technicianService.getResultsById(this.id).subscribe(res => {
    this.resultsForm.patchValue(res);
  })
}

updateResults(){
  if(this.resultsForm.valid){
    const formData: FormData = new FormData();
    
    formData.append('testName', this.resultsForm.get('testName').value);
    formData.append('patientName', this.resultsForm.get('patientName').value);
    formData.append('result', this.resultsForm.get('result').value);
    formData.append('comment', this.resultsForm.get('comment').value);
    formData.append('appointmentName', this.resultsForm.get('appointmentName').value);

    this.technicianService.updateTestResuts(this.id, formData).subscribe(
      (res) => {
        if(res.id != null){
          this.snackbar.open("Test Results Updated Successfully.", 'Close', { duration: 5000 });
          this.router.navigateByUrl('/technician/getAllResults');
        }
        else{
          this.snackbar.open("Fail to Update Test Results!", 'Close', { duration: 5000 });
        }
      }
    )
  }
  else{
    for(const i in this.resultsForm.controls){
      this.resultsForm.controls[i].markAsDirty();
      this.resultsForm.controls[i].updateValueAndValidity();
    }
  }
}

}
