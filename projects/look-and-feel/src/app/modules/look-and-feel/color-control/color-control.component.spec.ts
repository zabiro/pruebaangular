import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorControlComponent } from './color-control.component';

describe('ColorControlComponent', () => {
  let component: ColorControlComponent;
  let fixture: ComponentFixture<ColorControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorControlComponent]
    });
    fixture = TestBed.createComponent(ColorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
