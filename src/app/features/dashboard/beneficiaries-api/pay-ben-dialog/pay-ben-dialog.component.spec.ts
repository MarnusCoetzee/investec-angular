import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBenDialogComponent } from './pay-ben-dialog.component';

describe('PayBenDialogComponent', () => {
  let component: PayBenDialogComponent;
  let fixture: ComponentFixture<PayBenDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayBenDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayBenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
