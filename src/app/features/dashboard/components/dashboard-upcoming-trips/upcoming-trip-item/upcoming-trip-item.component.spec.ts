import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTripItemComponent } from './upcoming-trip-item.component';

describe('UpcomingTripItemComponent', () => {
  let component: UpcomingTripItemComponent;
  let fixture: ComponentFixture<UpcomingTripItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingTripItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcomingTripItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
