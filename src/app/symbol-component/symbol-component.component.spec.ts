import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolComponentComponent } from './symbol-component.component';

describe('SymbolComponentComponent', () => {
  let component: SymbolComponentComponent;
  let fixture: ComponentFixture<SymbolComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SymbolComponentComponent]
    });
    fixture = TestBed.createComponent(SymbolComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
