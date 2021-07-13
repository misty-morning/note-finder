import {isNumber} from 'lodash';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ENote, NOTE_NAMES, OCTAVE_LENGTH, TNoteNames } from 'src/app/models/notes';
import { EMode, MODES } from 'src/app/models/modes';
import { hasPropertyChanged } from 'src/app/utils/utils';
import { getNotesNamesForSeveralOctaves } from './note-finder.utils';

@Component({
  selector: 'app-note-finder',
  templateUrl: './note-finder.component.html',
  styleUrls: ['./note-finder.component.scss'],
})
export class NoteFinderComponent implements OnChanges {
  startOctave: number = 3;
  endOctave: number = 4;
  noteNamesMap: TNoteNames = NOTE_NAMES;
  @Input() tonic: ENote;
  @Input() mode: EMode;

  noteNames: string[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (
        hasPropertyChanged(changes.tonic) ||
        hasPropertyChanged(changes.mode)
      )
      && this.mode && isNumber(this.tonic)
    ) {
      const { formula } = MODES[this.mode];
      const notes = [];

      const tonic = this.tonic as number;

      for(let i = 0; i < formula.length; i++) {
        let note = tonic + formula[i];

        if (note >= OCTAVE_LENGTH) {
          note = note - OCTAVE_LENGTH;
        }

        notes.push(note);
      }

      // console.log("note numbers", notes);
      // console.log("notes length", notes.length);

      this.noteNames = getNotesNamesForSeveralOctaves(
        notes as ENote[],
        this.startOctave,
        this.endOctave
      );
    }
  }
}
