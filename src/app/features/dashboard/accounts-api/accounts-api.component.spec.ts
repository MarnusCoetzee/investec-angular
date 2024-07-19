import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsApiComponent } from './accounts-api.component';

describe('AccountsApiComponent', () => {
  let component: AccountsApiComponent;
  let fixture: ComponentFixture<AccountsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
