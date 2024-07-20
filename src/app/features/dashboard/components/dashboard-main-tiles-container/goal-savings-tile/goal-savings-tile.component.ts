import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-goal-savings-tile',
  standalone: true,
  imports: [MatIconModule, MatProgressBarModule],
  templateUrl: './goal-savings-tile.component.html',
  styleUrl: './goal-savings-tile.component.scss',
})
export class GoalSavingsTileComponent {}
