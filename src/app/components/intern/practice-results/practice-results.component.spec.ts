import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeResultsComponent } from './practice-results.component';

describe('PracticeResultsComponent', () => {
  let component: PracticeResultsComponent;
  let fixture: ComponentFixture<PracticeResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
