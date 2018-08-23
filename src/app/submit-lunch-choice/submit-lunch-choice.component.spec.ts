import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitLunchChoiceComponent } from './submit-lunch-choice.component';

describe('SubmitLunchChoiceComponent', () => {
  let component: SubmitLunchChoiceComponent;
  let fixture: ComponentFixture<SubmitLunchChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitLunchChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitLunchChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
