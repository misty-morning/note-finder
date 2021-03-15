import { Component, OnInit } from '@angular/core';
import { ENote } from 'src/app/models/notes';
import { EMode } from 'src/app/models/modes';

@Component({
  selector: 'app-tonality-note-finder',
  templateUrl: './tonality-note-finder.component.html',
  styleUrls: ['./tonality-note-finder.component.scss']
})
export class TonalityNoteFinderComponent implements OnInit {

  tonic: ENote;
  mode: EMode;

  constructor() { }

  ngOnInit(): void {
  }

  // handleTonicChange(note: ENote): void {
  //   this.tonic = note;
  // }

}