import { Component, input, Input } from '@angular/core';
import { InvestmentResultModule } from '../../core/modules/result.module';
import { JsonPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-invesment-result',
  imports: [JsonPipe, CurrencyPipe],
  templateUrl: './invesment-result.html',
  styleUrl: './invesment-result.scss',
})
export class InvesmentResult {
  // @Input() results: InvestmentResultModule[] = [];
  results = input<InvestmentResultModule[]>();
}
