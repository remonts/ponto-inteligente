import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPjComponent, SignUpPjRouterComponent } from './components';

@NgModule({
  declarations: [
    SignupPjComponent,
    SignUpPjRouterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SignupPjModule { }
