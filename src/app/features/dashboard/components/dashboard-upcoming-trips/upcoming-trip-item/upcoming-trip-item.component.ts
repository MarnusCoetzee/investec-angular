import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-upcoming-trip-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './upcoming-trip-item.component.html',
  styleUrl: './upcoming-trip-item.component.scss',
})
export class UpcomingTripItemComponent {
  @Input() trip: any;
  @Output() tripSelected = new EventEmitter<any>();
  @Output() editTripSelected = new EventEmitter<any>();

  handleTripSelected() {
    this.tripSelected.emit(this.trip);
  }

  handleEditTripSelected() {
    this.editTripSelected.emit(this.trip);
  }
}
