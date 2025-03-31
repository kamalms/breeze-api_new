import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FyersHomeComponent } from './fyers-home.component';

describe('FyersHomeComponent', () => {
  let component: FyersHomeComponent;
  let fixture: ComponentFixture<FyersHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FyersHomeComponent]
    });
    fixture = TestBed.createComponent(FyersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
