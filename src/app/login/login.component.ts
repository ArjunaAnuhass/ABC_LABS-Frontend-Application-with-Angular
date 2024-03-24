import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { UserStorageService } from '../../service/storage/user-storage.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  hidePassword: boolean;

  constructor (
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private userStorageService: UserStorageService,

  ) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // this.loginForm = this.formBuilder.group({
    //   email : [null, [Validators.required]],
    //   password: [null, [Validators.required]],
    // })
    
  }

  togglePasswordVisibility(){
    this.hidePassword = !this.hidePassword;
  }


  login(loginForm: NgForm) {

    // const username = this.loginForm.get('email')!.value;
    // const password = this.loginForm.get('password')!.value;
    
    this.authService.login(loginForm.value).subscribe(
      (response: any)=> {
        this.userStorageService.setRoles(response.role);
        this.userStorageService.setToken(response.token);

        const role = response.role;
        if(role === 'ADMIN'){
          this.router.navigateByUrl('admin/dashboard');
          this.snackbar.open('Admin Login Success', 'Ok', { duration: 5000});
        }
        else if(role === 'USER'){
          this.router.navigateByUrl('patient/patientDashboard');
          this.snackbar.open('Patient Login Success', 'Ok', { duration: 5000});
        }
        else if(role === 'TECHNICIAN'){
          this.router.navigateByUrl('technician/viewAppointments');
          this.snackbar.open('Technician Login Success', 'Ok', { duration: 5000});
        }
        else{
          this.router.navigateByUrl('/home');
        }
        

      },
      (error)=> {
        this.snackbar.open('Invalid Login Details', 'ERROR', { duration: 5000});
      }
    );
  }


}
