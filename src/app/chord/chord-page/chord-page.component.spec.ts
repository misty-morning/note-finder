import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordPageComponent } from './chord-page.component';

describe('ChordPageComponent', () => {
  let component: ChordPageComponent;
  let fixture: ComponentFixture<ChordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChordPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
