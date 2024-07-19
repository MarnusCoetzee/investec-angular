import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmTableComponent } from './ccm-table.component';

describe('CcmTableComponent', () => {
  let component: CcmTableComponent;
  let fixture: ComponentFixture<CcmTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcmTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CcmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
