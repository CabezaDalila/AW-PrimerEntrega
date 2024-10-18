import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataUsersService } from '../data-users.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  dataUsersService = inject(DataUsersService);
  constructor(private router: Router) { }

  logOut() {
    console.log("Deslogueado");
    this.dataUsersService.dataUser = undefined;
    this.router.navigate([''])
  }

  // If you need any component logic, add it here
}