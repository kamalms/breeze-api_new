import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreezeLoginComponent } from './breeze-login.component';

describe('BreezeLoginComponent', () => {
  let component: BreezeLoginComponent;
  let fixture: ComponentFixture<BreezeLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreezeLoginComponent]
    });
    fixture = TestBed.createComponent(BreezeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
