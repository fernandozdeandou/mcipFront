import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMentionComponent } from './detail-mention.component';

describe('DetailMentionComponent', () => {
  let component: DetailMentionComponent;
  let fixture: ComponentFixture<DetailMentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
