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
