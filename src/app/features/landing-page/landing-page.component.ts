import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthFacade } from '../../core/store/auth-store/auth.facade';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, NgIf],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  showLogIn: boolean = false;

  constructor(private authFacade: AuthFacade) {}

  handleLogin(): void {
    this.authFacade.login(
      'yAxzQRFX97vOcyQAwluEU6H6ePxMA5eY',
      '4dY0PjEYqoBrZ99r'
    );
  }

  switchToLoginPage() {
    this.showLogIn = true;
  }
}
