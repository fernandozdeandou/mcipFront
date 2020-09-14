import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationMentionComponent } from './observation-mention.component';

describe('ObservationMentionComponent', () => {
  let component: ObservationMentionComponent;
  let fixture: ComponentFixture<ObservationMentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationMentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationMentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
