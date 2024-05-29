import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { SignUpDTO, User } from '../../models/User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.registerForm.valid && this.registerForm.get('password')!.value === this.registerForm.get('confirmPassword')!.value) {
      const signUpDTO: SignUpDTO = {
        username: this.registerForm.get('username')!.value,
        email: this.registerForm.get('email')!.value,
        password: this.registerForm.get('password')!.value
      };

      this.authService.registerUser(signUpDTO).subscribe((user: Object) => {
        console.log(user);
        // handle successful registration
      }, (error) => {
        console.error(error);
        // handle registration error
      });
    } else {
      // handle form validation errors
    }
  }

  validateForm() {
    this.registerForm.markAllAsTouched();
    this.router.navigate(['/home']); // Redirect to home after validation
  }

  passwordMatchValidator(formControl: FormGroup) {
    const passwordControl = formControl.get('password');
    const confirmPasswordControl = formControl.get('confirmPassword');
  
    if (passwordControl && confirmPasswordControl) {
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ mustMatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }
}
