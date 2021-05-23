import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questionnaire1Component } from './questionnaire1.component';

describe('Questionnaire1Component', () => {
  let component: Questionnaire1Component;
  let fixture: ComponentFixture<Questionnaire1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Questionnaire1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Questionnaire1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
