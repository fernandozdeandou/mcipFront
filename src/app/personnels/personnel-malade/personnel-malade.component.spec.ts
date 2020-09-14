import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelMaladeComponent } from './personnel-malade.component';

describe('PersonnelMaladeComponent', () => {
  let component: PersonnelMaladeComponent;
  let fixture: ComponentFixture<PersonnelMaladeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelMaladeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelMaladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
