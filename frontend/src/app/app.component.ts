import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router) {

  }
  
  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          // 
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          window.scroll(0, 0);
        } else if (event instanceof NavigationError) {

        }
      });
  }

}
