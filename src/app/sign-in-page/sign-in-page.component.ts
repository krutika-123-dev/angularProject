import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatGridListModule],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.css'
})
export class SignInPageComponent {

  username = '';
  password = '';

  onSignIn() {
    
    this.username = '';
    this.password = '';
    window.location.reload(); // <-- reloads the page after clicking Sign In
  }
}
