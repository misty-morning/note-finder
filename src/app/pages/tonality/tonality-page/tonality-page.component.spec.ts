import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonalityPageComponent } from './tonality-page.component';

describe('TonalityPageComponent', () => {
  let component: TonalityPageComponent;
  let fixture: ComponentFixture<TonalityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonalityPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TonalityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
