import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { error } from 'console';
import { response } from 'express';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm!: FormGroup;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) {}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.signupForm = this.formBuilder.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    })
    
  }

  togglePasswordVisibility(){
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {
    const password = this.signupForm.get('password')?.value;
    const confirmPassword = this.signupForm.get('confirmPassword')?.value;

    if(password !== confirmPassword) {
      this.snackBar.open("password do not match", "Close", {duration: 5000, panelClass: 'error-snackbar' });
      
      return;
    }

    

    this.authService.register(this.signupForm.value).subscribe(
      (response) => {
        this.snackBar.open("SignUp Successfull!", "Close", { duration: 5000 });
        this.router.navigateByUrl("/login");
      },
      (error) => {
        this.snackBar.open("signup failed. Please try again", "Close", { duration: 5000, panelClass: 'error-snackbar' });
      }
    )
  
  }

}
