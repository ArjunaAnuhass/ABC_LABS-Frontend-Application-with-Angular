import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from '../../service/admin-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {

  id = this.activateRoute.snapshot.params['id'];

  userForm: FormGroup;

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
    this.userForm = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.required]],
    })

    this.getUserById();
    this.updateUser();
  }

  getUserById(){
    this.adminService.getAllUsersById(this.id).subscribe(res => {
      this.userForm.patchValue(res);
    })
  }

  updateUser(){
    if(this.userForm.valid){
      const formData: FormData = new FormData();
      
      formData.append('firstname', this.userForm.get('firstname').value);
      formData.append('lastname', this.userForm.get('lastname').value);
      formData.append('email', this.userForm.get('email').value);

      this.adminService.updateUser(this.id, formData).subscribe(
        (res) => {
          if(res.id != null){
            this.snackbar.open("User Updated Successfully.", 'Close', { duration: 5000 });
            this.router.navigateByUrl('/admin/viewAllUsers');
          }
          else{
            this.snackbar.open("Fail to Update Users!", 'Close', { duration: 5000 });
          }
        }
      )
    }
    else{
      for(const i in this.userForm.controls){
        this.userForm.controls[i].markAsDirty();
        this.userForm.controls[i].updateValueAndValidity();
      }
    }
  }

}
