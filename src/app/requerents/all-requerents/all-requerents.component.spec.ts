import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRequerentsComponent } from './all-requerents.component';

describe('AllRequerentsComponent', () => {
  let component: AllRequerentsComponent;
  let fixture: ComponentFixture<AllRequerentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRequerentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRequerentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
