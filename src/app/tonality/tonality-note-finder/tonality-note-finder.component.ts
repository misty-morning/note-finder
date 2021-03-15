import { Component, OnInit } from '@angular/core';
import { ENote } from 'src/app/models/notes';

@Component({
  selector: 'app-tonality-note-finder',
  templateUrl: './tonality-note-finder.component.html',
  styleUrls: ['./tonality-note-finder.component.scss']
})
export class TonalityNoteFinderComponent implements OnInit {

  tonic: ENote;

  constructor() { }

  ngOnInit(): void {
  }

  handleTonicChange(note: ENote): void {
    // console.log("handleTonicChange", note);
    this.tonic = note;
  }

}
