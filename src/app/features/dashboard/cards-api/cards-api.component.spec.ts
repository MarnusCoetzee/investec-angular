import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsApiComponent } from './cards-api.component';

describe('CardsApiComponent', () => {
  let component: CardsApiComponent;
  let fixture: ComponentFixture<CardsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
