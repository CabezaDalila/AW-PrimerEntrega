import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataUsersService {
  submitApplication(userName:string, email:string){
    const dataUser=[userName,email];
    console.log("Login Exitoso", dataUser);
  }
  constructor() { }
}
