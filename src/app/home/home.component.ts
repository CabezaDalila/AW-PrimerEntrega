import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DataUsersService } from '../data-users.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  stockData: any;
  cryptoPrice: number = 0;
  stockForm: FormGroup;
  cryptoPrices: { [key: string]: number | null } = {};

  constructor(private fb: FormBuilder, private dataService: DataUsersService) {
    this.stockForm = this.fb.group({
      ticker: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
    this.stockData = [];
  }

  ngOnInit() {
    this.getCryptoPrices(['BTCUSD', 'ETHUSD', 'SOLUSD']);
  }

  getStockData() {
    if (this.stockForm.valid) {
      const { ticker, startDate, endDate } = this.stockForm.value;
      this.dataService.getStockData(ticker, startDate, endDate).subscribe(
        (data) => {
          this.stockData = data; // Almacenar los datos para mostrarlos en la vista
          console.log(this.stockData);
        },
        (error) => {
          console.error('Error fetching stock data', error);
        }
      );
    } else {
      console.log('Formulario no es válido');
    }
  }

  /* getCryptoPrice(crypto: string) {
    this.dataService.getCryptoPrice(crypto).subscribe(
      (data) => {
        this.cryptoPrice = data.results[0].c;
        console.log('precio de bitcoin:', data);
      },
      (error) => {
        console.error('Error fetching crypto data', error);
      }
    );
  }
}*/
  getCryptoPrices(symbols: string[]) {
    symbols.forEach((symbol) => {
      this.dataService.getCryptoPrices(symbol).subscribe(
        (data) => {
          this.cryptoPrices[symbol] = data.results[0].c; // Guarda el precio de la criptomoneda en el objeto
          console.log(`Precio de ${symbol}:`, this.cryptoPrices[symbol]);
        },
        (error) => {
          console.error(`Error fetching data for ${symbol}`, error);
        }
      );
    });
  }
}
