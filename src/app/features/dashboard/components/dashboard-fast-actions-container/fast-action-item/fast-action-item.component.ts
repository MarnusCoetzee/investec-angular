import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-fast-action-item',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './fast-action-item.component.html',
  styleUrl: './fast-action-item.component.scss',
})
export class FastActionItemComponent {
  @Input() actionItem: any;
  @Output() actionItemClicked = new EventEmitter<void>();

  handleActionItemClicked(): void {
    this.actionItemClicked.emit(this.actionItem);
  }
}
