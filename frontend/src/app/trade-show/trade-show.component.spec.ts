import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeShowComponent } from './trade-show.component';

describe('TradeShowComponent', () => {
  let component: TradeShowComponent;
  let fixture: ComponentFixture<TradeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
