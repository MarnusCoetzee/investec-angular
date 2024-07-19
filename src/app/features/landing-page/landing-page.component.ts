import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AuthFacade } from '../../core/store/auth-store/auth.facade';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(private authFacade: AuthFacade) {}
  handleLogin(): void {
    this.authFacade.login(
      'yAxzQRFX97vOcyQAwluEU6H6ePxMA5eY',
      '4dY0PjEYqoBrZ99r'
    );
  }
}
