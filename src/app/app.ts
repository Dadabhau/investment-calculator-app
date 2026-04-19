import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layouts/header/header';
import { UserInput } from './features/user-input/user-input';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserInput],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('investment-calculator-app');
}
