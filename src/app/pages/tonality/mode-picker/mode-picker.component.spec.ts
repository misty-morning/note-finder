import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModePickerComponent } from './mode-picker.component';

describe('ModePickerComponent', () => {
  let component: ModePickerComponent;
  let fixture: ComponentFixture<ModePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
