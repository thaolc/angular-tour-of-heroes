/*
* @Author: th_le
* @Date:   2016-11-23 13:21:09
* @Last Modified by:   th_le
* @Last Modified time: 2016-11-23 13:26:11
*/

import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <heroes></heroes>
  `
})

export class AppComponent {
  title = "Tour of Heroes";
}