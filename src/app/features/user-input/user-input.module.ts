import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInput } from './user-input';
@NgModule({
  declarations: [UserInput],
  imports: [FormsModule],
  exports: [UserInput],
})
export class UserInputModule {}
