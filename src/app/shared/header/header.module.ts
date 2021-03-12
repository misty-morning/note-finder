import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HeaderComponent } from './header.component';
import { PageTabsComponent } from './page-tabs/page-tabs.component';

@NgModule({
  declarations: [HeaderComponent, PageTabsComponent],
  imports: [CommonModule, MatButtonToggleModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
