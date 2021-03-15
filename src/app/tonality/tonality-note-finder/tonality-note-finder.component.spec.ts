import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonalityNoteFinderComponent } from './tonality-note-finder.component';

describe('TonalityNoteFinderComponent', () => {
  let component: TonalityNoteFinderComponent;
  let fixture: ComponentFixture<TonalityNoteFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonalityNoteFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TonalityNoteFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
