import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipSettingsComponent } from './tip-settings.component';

describe('TipSettingsComponent', () => {
  let component: TipSettingsComponent;
  let fixture: ComponentFixture<TipSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipSettingsComponent]
    });
    fixture = TestBed.createComponent(TipSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
