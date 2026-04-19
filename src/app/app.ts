import { Component } from '@angular/core';
import { Header } from './layouts/header/header';
import { UserInput } from './features/user-input/user-input';
import { InvesmentResult } from './features/invesment-result/invesment-result';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvesmentResult],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
