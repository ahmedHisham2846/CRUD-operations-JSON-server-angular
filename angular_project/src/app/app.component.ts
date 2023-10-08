import { Component, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Data,
  NavigationEnd,
  Route,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  navbarLoginStatus: boolean = false;

  navbarStatus: boolean = true;
  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const ars: ActivatedRouteSnapshot = this.router.routerState.snapshot
          .root.firstChild as ActivatedRouteSnapshot;
        const currentRoute: Route = ars.routeConfig as Route;
        const crd: Data = currentRoute?.data as Data;
        if (crd['hideNavbar']) this.navbarStatus = !crd['hideNavbar'];
      }
    });
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.navbarLoginStatus = !!token;
  }
}
