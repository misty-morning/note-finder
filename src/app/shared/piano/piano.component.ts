import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { compact } from 'lodash';
import { Instrument } from "piano-chart";
import { ENote } from 'src/app/models/notes';
import { hasPropertyChanged } from 'src/app/utils/utils';


@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss']
})
export class PianoComponent implements OnInit, OnChanges {
  octave: number = 3;
  piano: Instrument;
  pressedKeyColor: string = "#808080";

  @Input() noteNames: string[];
  @Input() highlitedNotes: string[];

  constructor() { }

  ngOnInit(): void {
    this.createPiano();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.highlitedNotes)

    if (hasPropertyChanged(changes.noteNames) || hasPropertyChanged(changes.highlitedNotes)) {
      this.piano.destroy();
      this.createPiano();

      this.noteNames.forEach((note: string) => {
        this.piano.keyDown(note)
      })
    }
  }

  getPiano(): Instrument {
    console.log("getPiano highlitedNotes", this.highlitedNotes)

    return new Instrument(
      document.getElementById('piano'),
      {
        startOctave: this.octave,
        endOctave: this.octave + 1,
        endNote: "B",
        keyPressStyle: "vivid",
        vividKeyPressColor: this.pressedKeyColor,
        highlightedNotes: compact(this.highlitedNotes) || [],
      }
    );
  }

  createPiano(): void {
    this.piano = this.getPiano();
    this.piano.create();
  }
}

