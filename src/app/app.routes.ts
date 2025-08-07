import { Routes } from '@angular/router';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';  
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { authGuard } from './auth.guard'; // Importing the authGuard
import { TabledataComponent } from './tabledata/tabledata.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sign-in-page', pathMatch: 'full' },
  { path: 'sign-in-page', component: SignInPageComponent },
  { path: 'sign-up-page', component: SignUpPageComponent ,
    canActivate: [authGuard]  // Assuming authGuard is imported from auth.guard.ts
  },
  { path: 'tabledata', component: TabledataComponent },
];
