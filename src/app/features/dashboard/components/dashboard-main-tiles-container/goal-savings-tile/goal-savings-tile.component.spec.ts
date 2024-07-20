import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSavingsTileComponent } from './goal-savings-tile.component';

describe('GoalSavingsTileComponent', () => {
  let component: GoalSavingsTileComponent;
  let fixture: ComponentFixture<GoalSavingsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalSavingsTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoalSavingsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
