import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePickerComponent } from './note-picker.component';

describe('NotePickerComponent', () => {
  let component: NotePickerComponent;
  let fixture: ComponentFixture<NotePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
