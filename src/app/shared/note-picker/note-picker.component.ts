import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ENote, TNoteNames, NOTE_NAMES} from 'src/app/models/notes';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { EnumReflection } from 'src/app/utils/utils';

@Component({
  selector: 'app-note-picker',
  templateUrl: './note-picker.component.html',
  styleUrls: ['./note-picker.component.scss']
})
export class NotePickerComponent implements OnInit {
  private noteValue: ENote;
  // notes: ENote[] = Object.values(ENote) as ENote[];
  notes: ENote[] = EnumReflection.getValues(ENote) as ENote[];

  noteNames: Readonly<TNoteNames> = NOTE_NAMES;

  @Output() noteChange = new EventEmitter();

  @Input()
  get note(): ENote {
    return this.noteValue;
  }

  set note(value: ENote) {
    this.noteValue = value;
    this.noteChange.emit(this.noteValue);
  }

  constructor() { }

  ngOnInit(): void {}

  handleNoteChange(event: MatButtonToggleChange) {
    this.note = event.value;
  }
}
