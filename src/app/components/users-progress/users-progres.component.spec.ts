import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersProgressComponent } from './users-progres.component';

describe('UsersProgresComponent', () => {
  let component: UsersProgressComponent;
  let fixture: ComponentFixture<UsersProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
