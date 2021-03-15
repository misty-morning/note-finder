import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TonalityPageComponent } from './tonality-page/tonality-page.component';
import { TonalityNoteFinderComponent } from './tonality-note-finder/tonality-note-finder.component';
import { NotePickerModule } from '../shared/note-picker/note-picker.module';
import { ModePickerComponent } from './mode-picker/mode-picker.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    TonalityPageComponent,
    TonalityNoteFinderComponent,
    ModePickerComponent,
  ],
  imports: [
    CommonModule,
    NotePickerModule,
    MatButtonToggleModule,
  ],
  exports: [
    TonalityPageComponent
  ]
})
export class TonalityModule { }
