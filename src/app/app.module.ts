import { NgModule } from '@angular/core';
import { App } from './app';
import { Header } from './layouts/header/header';
import { InvesmentResult } from './features/invesment-result/invesment-result';

import { BrowserModule } from '@angular/platform-browser';
import { UserInputModule } from './features/user-input/user-input.module';

@NgModule({
  declarations: [App, Header, InvesmentResult],
  imports: [BrowserModule, UserInputModule],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
