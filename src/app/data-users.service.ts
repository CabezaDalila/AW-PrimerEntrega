import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Crypto } from '../interfaces/crypto';
@Injectable({
  providedIn: 'root',
})
export class DataUsersService {
  dataUser?: { name: string; email: string };

  submitApplication(userName: string, email: string) {
    this.dataUser = { name: userName, email: email };
    console.log('Login Exitoso', this.dataUser);

    this.router.navigate(['/home']);
  }
  private apiKey = '8nkipGR5ayMVs3Ax0tvUAuhhMxuWOa7z';
  private baseUrl = 'https://api.polygon.io/v2/aggs/ticker/';

  constructor(private http: HttpClient, private router: Router) {
    this.dataUser = undefined;
  }

  getStockData(
    ticker: string,
    startDate: string,
    endDate: string
  ): Observable<Stock[]> {
    const url = `${this.baseUrl}${ticker}/range/1/day/${startDate}/${endDate}?apiKey=${this.apiKey}`;
    return this.http.get<Stock[]>(url);
  } // va en otro servicio

  getCryptoPrices(symbol: string): Observable<Crypto> {
    const url = `${this.baseUrl}X:${symbol}/prev?apiKey=${this.apiKey}`;
    return this.http.get<Crypto>(url);
  }
}
interface Stock {
  adjusted: boolean;
  next_url: string;
  queryCount: number;
  request_id: string;
  results: {
    c: number;
    h: number;
    l: number;
    n: number;
    o: number;
    t: number;
    v: number;
    vw: number;
  }[];
  resultsCount: number;
  status: string;
  ticker: string;
}
