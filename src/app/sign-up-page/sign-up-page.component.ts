import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatSelectModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent {
 
  onSignUp() {
  // Your sign-up logic here (if any)
  window.location.reload(); // This will reload the page
}

}
