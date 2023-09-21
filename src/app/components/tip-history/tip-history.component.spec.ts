import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipHistoryComponent } from './tip-history.component';

describe('TipHistoryComponent', () => {
  let component: TipHistoryComponent;
  let fixture: ComponentFixture<TipHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipHistoryComponent]
    });
    fixture = TestBed.createComponent(TipHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
