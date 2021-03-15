import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TonalityPageComponent } from './tonality-page/tonality-page.component';
import { TonalityNoteFinderComponent } from './tonality-note-finder/tonality-note-finder.component';
import { NotePickerModule } from '../shared/note-picker/note-picker.module';


@NgModule({
  declarations: [
    TonalityPageComponent,
    TonalityNoteFinderComponent,
  ],
  imports: [
    CommonModule,
    NotePickerModule,
  ],
  exports: [
    TonalityPageComponent
  ]
})
export class TonalityModule { }
