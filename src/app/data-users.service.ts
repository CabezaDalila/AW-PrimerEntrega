import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataUsersService {
  dataUser?: { name: string, email: string };

  submitApplication(userName: string, email: string) {
    this.dataUser = { name: userName, email: email };
    console.log("Login Exitoso", this.dataUser);

    this.router.navigate(['/home'])
  }
  private apiKey = '8nkipGR5ayMVs3Ax0tvUAuhhMxuWOa7z';
  private baseUrl = 'https://api.polygon.io/v2/aggs/ticker/';

  constructor(private http: HttpClient, private router: Router) {
    this.dataUser = undefined;
  }

  getStockData(ticker: string, startDate: string, endDate: string): Observable<any> {
    const url = `${this.baseUrl}${ticker}/range/1/day/${startDate}/${endDate}?apiKey=${this.apiKey}`;
    return this.http.get(url);
  }// va en otro servicio



}
