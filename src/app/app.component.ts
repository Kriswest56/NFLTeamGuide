import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <div>
      <img width="175px" src="https://www.seeklogo.net/wp-content/uploads/2015/08/NFL-team-logos-vector.png"/>
    </div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/teams" routerLinkActive="active">Teams</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = ''
}
