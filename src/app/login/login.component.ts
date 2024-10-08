import { Component,inject } from '@angular/core';
import { FormControl,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataUsersService } from '../data-users.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  route:ActivatedRoute=inject(ActivatedRoute);
  dataUsersService = inject(DataUsersService);
  applyForm= new FormGroup({
    userName: new FormControl(''),
    userEmail: new FormControl('')
  });

  submitApplication() {
    this.dataUsersService.submitApplication(
      this.applyForm.value.userName ?? '',
      this.applyForm.value.userEmail ?? ''
    );
    this.applyForm.reset();
  }
  
}



/*import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataUsersService } from '../data-users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  dataUsersService = inject(DataUsersService);
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      userEmail: ['', [Validators.required, Validators.email]]
    });
  }

  submitApplication() {
    if (this.loginForm.valid) {
      this.dataUsersService.submitApplication(
        this.loginForm.value.userName!,
        this.loginForm.value.userEmail!
      );
      this.loginForm.reset();
    }
  }
}*/
