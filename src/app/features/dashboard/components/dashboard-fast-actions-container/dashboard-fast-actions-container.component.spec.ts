import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFastActionsContainerComponent } from './dashboard-fast-actions-container.component';

describe('DashboardFastActionsContainerComponent', () => {
  let component: DashboardFastActionsContainerComponent;
  let fixture: ComponentFixture<DashboardFastActionsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardFastActionsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardFastActionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
