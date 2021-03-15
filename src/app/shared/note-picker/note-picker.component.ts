import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ENote } from 'src/app/models/notes';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-note-picker',
  templateUrl: './note-picker.component.html',
  styleUrls: ['./note-picker.component.scss']
})
export class NotePickerComponent implements OnInit {
  @Input() note: ENote;

  notes: ENote[] = Object.values(ENote) as ENote[];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.notes);
  }

  @Output() onChange = new EventEmitter<ENote>();
  handleNoteChange(event: MatButtonToggleChange) {
    // console.log('handleNoteChange value', event)
    this.onChange.emit(event.value);
  }

}
