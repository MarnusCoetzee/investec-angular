import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalExpensesTileComponent } from './total-expenses-tile.component';

describe('TotalExpensesTileComponent', () => {
  let component: TotalExpensesTileComponent;
  let fixture: ComponentFixture<TotalExpensesTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalExpensesTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalExpensesTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
