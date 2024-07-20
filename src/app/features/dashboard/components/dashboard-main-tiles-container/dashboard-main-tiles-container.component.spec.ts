import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMainTilesContainerComponent } from './dashboard-main-tiles-container.component';

describe('DashboardMainTilesContainerComponent', () => {
  let component: DashboardMainTilesContainerComponent;
  let fixture: ComponentFixture<DashboardMainTilesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMainTilesContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardMainTilesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
