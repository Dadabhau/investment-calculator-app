import { Component, EventEmitter, Input, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentModule } from '../../core/modules/invest.module';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.scss',
})
export class UserInput {
  // @Output() calculate = new EventEmitter<InvestmentModule>();
  calculate = output<InvestmentModule>();

  // initialInvestment!: number;
  // annualInvestment!: number;
  // expectedReturn: number = 5;
  // duration: number = 10;

  initialInvestment = signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(5);
  duration = signal(10);

  result: any;

  onSubmit() {
    console.log('Submitted!');
    this.calculate.emit({
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
