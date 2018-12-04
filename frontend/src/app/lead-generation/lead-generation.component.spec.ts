import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadGenerationComponent } from './lead-generation.component';

describe('LeadGenerationComponent', () => {
  let component: LeadGenerationComponent;
  let fixture: ComponentFixture<LeadGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
