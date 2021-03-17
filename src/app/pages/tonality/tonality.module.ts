import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TonalityPageComponent } from './tonality-page/tonality-page.component';
import { TonalityComponent } from './tonality/tonality.component';
import { NotePickerModule } from '../../shared/note-picker/note-picker.module';
import { ModePickerComponent } from './mode-picker/mode-picker.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PianoModule } from '../../shared/piano/piano.module';
import { NoteFinderComponent } from './note-finder/note-finder.component';


@NgModule({
  declarations: [
    TonalityPageComponent,
    TonalityComponent,
    ModePickerComponent,
    NoteFinderComponent,
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    NotePickerModule,
    PianoModule,
  ],
  exports: [
    TonalityPageComponent
  ]
})
export class TonalityModule { }
