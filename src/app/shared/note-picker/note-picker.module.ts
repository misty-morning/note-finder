import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotePickerComponent } from './note-picker.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [NotePickerComponent],
  imports: [
    CommonModule,
    MatButtonToggleModule,
  ],
  exports: [NotePickerComponent],
})
export class NotePickerModule { }
