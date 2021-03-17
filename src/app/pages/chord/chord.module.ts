import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChordPageComponent } from './chord-page/chord-page.component';



@NgModule({
  declarations: [ChordPageComponent],
  imports: [
    CommonModule
  ],
  exports: [ChordPageComponent]
})
export class ChordModule { }
