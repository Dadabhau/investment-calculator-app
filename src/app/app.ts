import { Component, signal } from '@angular/core';
import { Header } from './layouts/header/header';
import { UserInput } from './features/user-input/user-input';
import type { InvestmentModule } from './core/modules/invest.module';
import { InvesmentResult } from './features/invesment-result/invesment-result';
import type { InvestmentResultModule } from './core/modules/result.module';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvesmentResult],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('investment-calculator-app');
  // investmentResults: InvestmentResultModule[] = [];
  investmentResults = signal<InvestmentResultModule[]>([]);

  onCalculateInvestmentResults(data: InvestmentModule) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    console.log(annualData);
    // this.investmentResults = annualData;
    this.investmentResults.set(annualData);
    // return annualData;
  }
}
