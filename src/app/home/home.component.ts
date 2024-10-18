import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  DataUsersService
} from '../data-users.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  stockForm: FormGroup;
  stockData: any;

  constructor(private fb: FormBuilder, private dataService: DataUsersService) {
    this.stockForm = this.fb.group({
      ticker: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
    this.stockData = [];
  }
  getStockData() {
    if (this.stockForm.valid) {
      const { ticker, startDate, endDate } = this.stockForm.value;
      this.dataService.getStockData(ticker, startDate, endDate).subscribe(
        data => {
          this.stockData = data;  // Almacenar los datos para mostrarlos en la vista
          console.log(this.stockData);
        },
        error => {
          console.error('Error fetching stock data', error);
        }
      );
    } else {
      console.log('Formulario no es válido');
    }
  }

}
