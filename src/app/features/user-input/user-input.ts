import { Component, signal } from '@angular/core';
import { InvestmentService } from '../../core/service/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.html',
  styleUrl: './user-input.scss',
})
export class UserInput {
  initialInvestment = signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(5);
  duration = signal(10);

  result: any;

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    console.log('Submitted!');
    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    });
    this.initialInvestment.set(0);
    this.annualInvestment.set(0);
    this.expectedReturn.set(5);
    this.duration.set(10);
  }
}
