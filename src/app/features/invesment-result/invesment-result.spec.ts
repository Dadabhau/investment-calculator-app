import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvesmentResult } from './invesment-result';

describe('InvesmentResult', () => {
  let component: InvesmentResult;
  let fixture: ComponentFixture<InvesmentResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvesmentResult],
    }).compileComponents();

    fixture = TestBed.createComponent(InvesmentResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
