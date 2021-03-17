import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { TonalityPageComponent } from './pages/tonality/tonality-page/tonality-page.component';
import { ChordPageComponent } from './pages/chord/chord-page/chord-page.component';

const appRoutes: Routes = [
  { path: 'tonalty', component: TonalityPageComponent },
  { path: 'chord', component: ChordPageComponent },
  { path: '',   redirectTo: '/tonalty', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
