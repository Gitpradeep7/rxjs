import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterpageComponent } from './counterpage.component';

describe('CounterpageComponent', () => {
  let component: CounterpageComponent;
  let fixture: ComponentFixture<CounterpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterpageComponent]
    });
    fixture = TestBed.createComponent(CounterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
