import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSuspectsComponent } from './all-suspects.component';

describe('AllSuspectsComponent', () => {
  let component: AllSuspectsComponent;
  let fixture: ComponentFixture<AllSuspectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSuspectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSuspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
