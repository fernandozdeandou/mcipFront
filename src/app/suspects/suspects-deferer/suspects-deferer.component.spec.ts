import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectsDefererComponent } from './suspects-deferer.component';

describe('SuspectsDefererComponent', () => {
  let component: SuspectsDefererComponent;
  let fixture: ComponentFixture<SuspectsDefererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectsDefererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectsDefererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
