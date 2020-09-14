import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPersonnelComponent } from './all-personnel.component';

describe('AllPersonnelComponent', () => {
  let component: AllPersonnelComponent;
  let fixture: ComponentFixture<AllPersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
