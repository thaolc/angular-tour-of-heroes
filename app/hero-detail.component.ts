/*
* @Author: th_le
* @Date:   2016-11-22 14:30:38
* @Last Modified by:   th_le
* @Last Modified time: 2016-11-22 14:34:12
*/

import { Component, Input} from "@angular/core";
import { Hero } from "./hero";

@Component({
  selector: "hero-detail",
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div>
        <label>id: </label>{{hero.id}}
      </div>
      <div>
        <label>name: </label>
        <input type="text" placeholder="name" [(ngModel)]="hero.name"/>
      </div>
    </div>
  `
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}