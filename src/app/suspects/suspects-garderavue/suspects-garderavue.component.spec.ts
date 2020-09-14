import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectsGarderavueComponent } from './suspects-garderavue.component';

describe('SuspectsGarderavueComponent', () => {
  let component: SuspectsGarderavueComponent;
  let fixture: ComponentFixture<SuspectsGarderavueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectsGarderavueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectsGarderavueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
