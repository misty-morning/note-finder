import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { EMode, TModes, MODES } from 'src/app/models/modes';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import {  } from '@angular/material/button';

@Component({
  selector: 'app-mode-picker',
  templateUrl: './mode-picker.component.html',
  styleUrls: ['./mode-picker.component.scss']
})
export class ModePickerComponent implements OnInit {
  modeValue: EMode;
  modes: Readonly<TModes> = MODES;

  @Output() modeChange = new EventEmitter();

  @Input()
  get mode(): EMode {
    return this.modeValue;
  }

  set mode(value: EMode) {
    this.modeValue = value;
    this.modeChange.emit(this.modeValue);
  }

  constructor() { }

  ngOnInit(): void {
  }

  getButtonColor(mode): string {
    return mode.key === this.modeValue ? 'primary' : 'basic'
  }

  handleModeChangeBtnGroup(event: MatButtonToggleChange) {
    this.mode = event.value;
  }

  handleModeChange(event) {
    this.mode = event.currentTarget.dataset?.mode
  }
}
