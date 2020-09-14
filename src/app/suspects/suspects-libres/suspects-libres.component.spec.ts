import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectsLibresComponent } from './suspects-libres.component';

describe('SuspectsLibresComponent', () => {
  let component: SuspectsLibresComponent;
  let fixture: ComponentFixture<SuspectsLibresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectsLibresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectsLibresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
