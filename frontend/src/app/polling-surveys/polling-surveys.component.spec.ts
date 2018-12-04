import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingSurveysComponent } from './polling-surveys.component';

describe('PollingSurveysComponent', () => {
  let component: PollingSurveysComponent;
  let fixture: ComponentFixture<PollingSurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollingSurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollingSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
