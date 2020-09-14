import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelAffecteComponent } from './personnel-affecte.component';

describe('PersonnelAffecteComponent', () => {
  let component: PersonnelAffecteComponent;
  let fixture: ComponentFixture<PersonnelAffecteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelAffecteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelAffecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
