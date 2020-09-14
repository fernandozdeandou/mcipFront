import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMentionsComponent } from './page-mentions.component';

describe('PageMentionsComponent', () => {
  let component: PageMentionsComponent;
  let fixture: ComponentFixture<PageMentionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMentionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
