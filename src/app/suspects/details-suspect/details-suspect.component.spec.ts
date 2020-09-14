import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSuspectComponent } from './details-suspect.component';

describe('DetailsSuspectComponent', () => {
  let component: DetailsSuspectComponent;
  let fixture: ComponentFixture<DetailsSuspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSuspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSuspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
