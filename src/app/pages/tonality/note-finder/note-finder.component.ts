import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ENote } from 'src/app/models/notes';
import { EMode, MODES } from 'src/app/models/modes';
import { hasPropertyChanged } from 'src/app/utils/utils';
import { getNoteName } from './note-finder.utils';

@Component({
  selector: 'app-note-finder',
  templateUrl: './note-finder.component.html',
  styleUrls: ['./note-finder.component.scss']
})
export class NoteFinderComponent implements OnInit, OnChanges {
  octave: number = 3;
  @Input() tonic: ENote;
  @Input() mode: EMode;

  noteNames: string[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (hasPropertyChanged(changes.tonic) || hasPropertyChanged(changes.mode)) 
      // &&
      // this.mode && this.tonic
    ) {
      // console.log("tonic", this.tonic)
      // console.log("mode", this.mode)

      const {formula} = MODES[this.mode]
      const notes = [];

      // notes.push(getNoteName(this.tonic, this.octave));
      for(let i = 0; i < formula.length; i++) {
        let note = this.tonic as number + formula[i];
        let octave = this.octave;
        // if (note > 13) {
        //   note -= 13;
        //   octave++;
        // }

        notes.push(getNoteName(note as ENote, octave));
      }
      this.noteNames = notes;
    }
  }
}
