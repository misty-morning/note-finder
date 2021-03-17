import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './shared/layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { TonalityModule } from './pages/tonality/tonality.module';
import { ChordModule } from './pages/chord/chord.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HeaderModule } from './shared/header/header.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    ChordModule,
    TonalityModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
