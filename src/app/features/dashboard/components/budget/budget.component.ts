import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatCardModule],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss'
})
export class BudgetComponent {
  onSubmit()   {
    console.log('Form submitted');
  }
}
