import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-beneficiary-details',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, NgIf, MatExpansionModule],
  templateUrl: './beneficiary-details.component.html',
  styleUrl: './beneficiary-details.component.scss',
})
export class BeneficiaryDetailsComponent {
  @Input() beneficiary: any;
}
