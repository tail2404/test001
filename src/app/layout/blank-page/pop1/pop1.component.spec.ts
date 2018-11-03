import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pop1Component } from './pop1.component';

describe('Pop1Component', () => {
  let component: Pop1Component;
  let fixture: ComponentFixture<Pop1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pop1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
