import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToMarkComponent } from './to-mark.component';

describe('ToMarkComponent', () => {
  let component: ToMarkComponent;
  let fixture: ComponentFixture<ToMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToMarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
