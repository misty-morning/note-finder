import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFinderComponent } from './note-finder.component';

describe('NoteFinderComponent', () => {
  let component: NoteFinderComponent;
  let fixture: ComponentFixture<NoteFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
