import { Component, OnInit } from '@angular/core';
import { ENote, TNoteNames, NOTE_NAMES } from 'src/app/models/notes';
import { EMode, MODES, TModes } from 'src/app/models/modes';

@Component({
  selector: 'app-tonality',
  templateUrl: './tonality.component.html',
  styleUrls: ['./tonality.component.scss']
})
export class TonalityComponent implements OnInit {
  noteNames: Readonly<TNoteNames> = NOTE_NAMES;
  tonic: ENote;
  mode: EMode;

  modes: Readonly<TModes> = MODES;

  constructor() { }

  ngOnInit(): void {
  }
}
