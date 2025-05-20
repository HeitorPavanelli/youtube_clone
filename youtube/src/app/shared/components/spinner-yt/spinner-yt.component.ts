import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-spinner-yt',
  templateUrl: './spinner-yt.component.html',
  styleUrls: ['./spinner-yt.component.css']
})
export class SpinnerYtComponent implements OnInit {

  loading = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    });
  }
}
