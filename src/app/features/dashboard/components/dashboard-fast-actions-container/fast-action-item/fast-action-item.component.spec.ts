import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastActionItemComponent } from './fast-action-item.component';

describe('FastActionItemComponent', () => {
  let component: FastActionItemComponent;
  let fixture: ComponentFixture<FastActionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FastActionItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FastActionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
