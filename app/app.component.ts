/*
* @Author: th_le
* @Date:   2016-11-23 13:21:09
* @Last Modified by:   th_le
* @Last Modified time: 2016-11-24 15:56:48
*/

import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = "Tour of Heroes";
}