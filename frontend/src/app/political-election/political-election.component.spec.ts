import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalElectionComponent } from './political-election.component';

describe('PoliticalElectionComponent', () => {
  let component: PoliticalElectionComponent;
  let fixture: ComponentFixture<PoliticalElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticalElectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
