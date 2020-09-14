import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSuspCniComponent } from './info-susp-cni.component';

describe('InfoSuspCniComponent', () => {
  let component: InfoSuspCniComponent;
  let fixture: ComponentFixture<InfoSuspCniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSuspCniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSuspCniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
