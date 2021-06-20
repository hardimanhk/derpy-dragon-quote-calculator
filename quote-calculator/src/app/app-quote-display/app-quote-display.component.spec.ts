import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppQuoteDisplayComponent } from './app-quote-display.component';

describe('AppQuoteDisplayComponent', () => {
  let component: AppQuoteDisplayComponent;
  let fixture: ComponentFixture<AppQuoteDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppQuoteDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppQuoteDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
