import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectsRechercherComponent } from './suspects-rechercher.component';

describe('SuspectsRechercherComponent', () => {
  let component: SuspectsRechercherComponent;
  let fixture: ComponentFixture<SuspectsRechercherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectsRechercherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectsRechercherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
