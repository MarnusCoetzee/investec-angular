import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-total-expenses-tile',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './total-expenses-tile.component.html',
  styleUrl: './total-expenses-tile.component.scss',
})
export class TotalExpensesTileComponent {}
