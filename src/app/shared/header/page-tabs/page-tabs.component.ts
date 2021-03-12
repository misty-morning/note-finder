import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { MatButtonToggleChange } from '@angular/material/button-toggle/button-toggle';

@Component({
  selector: 'app-page-tabs',
  templateUrl: './page-tabs.component.html',
  styleUrls: ['./page-tabs.component.scss'],
})
export class PageTabsComponent {
  currentRoute: string;

  constructor(private router: Router) {
    console.log(router.url);
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }

  onTabChange(event: MatButtonToggleChange): void {
    this.router.navigate([event.value]);
  }
}
