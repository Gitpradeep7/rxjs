import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFormEventComponent } from './child-form-event.component';

describe('ChildFormEventComponent', () => {
  let component: ChildFormEventComponent;
  let fixture: ComponentFixture<ChildFormEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildFormEventComponent]
    });
    fixture = TestBed.createComponent(ChildFormEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
