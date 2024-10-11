import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataUsersService {
  submitApplication(userName:string, email:string){
    const dataUser=[userName,email];
    console.log("Login Exitoso", dataUser);

    this.router.navigate(['/home'])
  }

  private apiKey = '8nkipGR5ayMVs3Ax0tvUAuhhMxuWOa7z';
  private baseUrl = 'https://api.polygon.io/v2/aggs/ticker/';




  constructor(private http: HttpClient,private router: Router) {}

     getStockData(ticker: string, startDate: string, endDate: string):Observable<any> {
      const url = `${this.baseUrl}${ticker}/range/1/day/${startDate}/${endDate}?apiKey=${this.apiKey}`;
      return this.http.get(url);
  }


   
}
