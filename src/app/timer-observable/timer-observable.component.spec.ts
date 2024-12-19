import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerObservableComponent } from './timer-observable.component';

describe('TimerObservableComponent', () => {
  let component: TimerObservableComponent;
  let fixture: ComponentFixture<TimerObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerObservableComponent]
    });
    fixture = TestBed.createComponent(TimerObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
