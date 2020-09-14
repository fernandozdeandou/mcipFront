import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMentionsComponent } from './all-mentions.component';

describe('AllMentionsComponent', () => {
  let component: AllMentionsComponent;
  let fixture: ComponentFixture<AllMentionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMentionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
