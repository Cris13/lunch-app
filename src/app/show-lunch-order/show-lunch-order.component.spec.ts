import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLunchOrderComponent } from './show-lunch-order.component';

describe('ShowLunchOrderComponent', () => {
  let component: ShowLunchOrderComponent;
  let fixture: ComponentFixture<ShowLunchOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLunchOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLunchOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
