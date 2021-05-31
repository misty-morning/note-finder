import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { compact, isArray } from 'lodash';
import { IInstrumentSettings, Instrument } from "piano-chart";
import { hasPropertyChanged } from 'src/app/utils/utils';

const octave: number = 3;
const pressedKeyColor: string = "#808080";

const initialPianoSettings: IInstrumentSettings = {
  startOctave: octave,
  endOctave: octave + 1,
  endNote: "B",
  keyPressStyle: "vivid",
  vividKeyPressColor: pressedKeyColor,
}

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss']
})
export class PianoComponent implements OnInit, OnChanges {
  piano: Instrument;

  @Input() noteNames: string[];
  @Input() highlitedNotes: string[];

  constructor() { }

  ngOnInit(): void {
    this.createPiano();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.highlitedNotes)

    if (hasPropertyChanged(changes.noteNames)) {
      this.piano?.reload();
      this.noteNames?.forEach((note: string) => {
        this.piano.keyDown(note);
      })
    }
    if (hasPropertyChanged(changes.highlitedNotes)) {
      this.piano?.applySettings({
        highlightedNotes: compact(this.highlitedNotes) || [],
      })
    }
  }

  createPiano(): void {
    this.piano = new Instrument(
      document.getElementById('piano'),
      initialPianoSettings
    );

    this.piano.create();
  }
}

