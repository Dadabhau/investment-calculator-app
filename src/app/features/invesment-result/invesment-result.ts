import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../../core/service/investment.service';

@Component({
  selector: 'app-invesment-result',
  imports: [CurrencyPipe],
  templateUrl: './invesment-result.html',
  styleUrl: './invesment-result.scss',
})
export class InvesmentResult {
  constructor(private investmentService: InvestmentService) {}

  get results() {
    return this.investmentService.investmentResults;
  }
}
