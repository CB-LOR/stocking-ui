import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockingSignupComponent } from './stocking-signup.component';

describe('StockingSignupComponent', () => {
  let component: StockingSignupComponent;
  let fixture: ComponentFixture<StockingSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockingSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockingSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
