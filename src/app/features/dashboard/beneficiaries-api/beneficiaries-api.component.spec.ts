import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariesApiComponent } from './beneficiaries-api.component';

describe('BeneficiariesApiComponent', () => {
  let component: BeneficiariesApiComponent;
  let fixture: ComponentFixture<BeneficiariesApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiariesApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeneficiariesApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
