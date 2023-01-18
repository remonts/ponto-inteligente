import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
	SignupPjComponent,
	SignUpPjRouterComponent
} from './components';

export const SignUpPjRoutes: Routes = [
	{
		path: 'cadastro-pj',
		component: SignUpPjRouterComponent,
		children: [
		  {
			path: '',
			component: SignupPjComponent
		  }
		]
	}
];

@NgModule({
  imports: [
  	RouterModule.forChild(SignUpPjRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SignUpPjRoutingModule {
}
