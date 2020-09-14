import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelPermissionnaireComponent } from './personnel-permissionnaire.component';

describe('PersonnelPermissionnaireComponent', () => {
  let component: PersonnelPermissionnaireComponent;
  let fixture: ComponentFixture<PersonnelPermissionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelPermissionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelPermissionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
