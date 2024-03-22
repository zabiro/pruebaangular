import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookAndFeelComponent } from './look-and-feel.component';

describe('LookAndFeelComponent', () => {
  let component: LookAndFeelComponent;
  let fixture: ComponentFixture<LookAndFeelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookAndFeelComponent]
    });
    fixture = TestBed.createComponent(LookAndFeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
