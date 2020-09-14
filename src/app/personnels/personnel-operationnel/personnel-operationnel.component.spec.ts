import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelOperationnelComponent } from './personnel-operationnel.component';

describe('PersonnelOperationnelComponent', () => {
  let component: PersonnelOperationnelComponent;
  let fixture: ComponentFixture<PersonnelOperationnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelOperationnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelOperationnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
