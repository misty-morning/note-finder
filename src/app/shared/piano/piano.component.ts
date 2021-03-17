import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
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
  pressedKeyColor: string = "#1cdd16";

  @Input() noteNames: string[];

  constructor() { }

  ngOnInit(): void {
    this.piano = new Instrument(
      document.getElementById('piano-test'),
      {
        startOctave: this.octave,
        endOctave: this.octave + 1,
        endNote: "B",
        keyPressStyle: "vivid",
        vividKeyPressColor: this.pressedKeyColor,
      }
    );
    this.piano.create();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (hasPropertyChanged(changes.noteNames)) {
      this.piano.destroy();
      this.piano.create();

      this.noteNames.forEach((note: string) => {
        this.piano.keyDown(note)
      })
    }
  }

}
