import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentModule } from '../../core/modules/invest.module';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.scss',
})
export class UserInput {
  @Output() calculate = new EventEmitter<InvestmentModule>();

  initialInvestment!: number;
  annualInvestment!: number;
  expectedReturn: number = 5;
  duration: number = 10;

  result: any;

  onSubmit() {
    console.log('Submitted!');
    this.calculate.emit({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    });
  }
}
