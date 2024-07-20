import { Component } from '@angular/core';
import { UpcomingTripItemComponent } from './upcoming-trip-item/upcoming-trip-item.component';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

export const UpcomingTrips = [
  {
    tripName: 'Los Angeles',
    tripImageUrl: '../../../../../assets/images/los-angeles.webp',
    startDate: '2021-10-10',
    endDate: '2021-10-11',
    tripSavingsGoal: 'R 5.000,00',
  },
  {
    tripName: 'Vietnam',
    tripImageUrl: '../../../../../assets/images/los-angeles.webp',
    startDate: '2021-10-10',
    endDate: '2021-10-11',
    tripSavingsGoal: 'R 5.000,00',
  },
  {
    tripName: 'Moscow',
    tripImageUrl: '../../../../../assets/images/los-angeles.webp',
    startDate: '2021-10-10',
    endDate: '2021-10-11',
    tripSavingsGoal: 'R 5.000,00',
  },
  {
    tripName: 'Cape Town',
    tripImageUrl: '../../../../../assets/images/los-angeles.webp',
    startDate: '2021-10-10',
    endDate: '2021-10-11',
    tripSavingsGoal: 'R 5.000,00',
  },
];

@Component({
  selector: 'app-dashboard-upcoming-trips',
  standalone: true,
  imports: [UpcomingTripItemComponent, NgFor],
  templateUrl: './dashboard-upcoming-trips.component.html',
  styleUrl: './dashboard-upcoming-trips.component.scss',
})
export class DashboardUpcomingTripsComponent {
  upcomingTrips = UpcomingTrips;

  constructor(private router: Router) {}

  editTrip(event: any) {
    this.router.navigate(['dashboard/edit-trip', event.tripName]);
  }

  selectTrip(event: any) {
    this.router.navigate(['dashboard/view-trip', event.tripName]);
  }
}
