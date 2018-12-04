import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesMarkettingComponent } from './sales-marketting.component';

describe('SalesMarkettingComponent', () => {
  let component: SalesMarkettingComponent;
  let fixture: ComponentFixture<SalesMarkettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesMarkettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesMarkettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
