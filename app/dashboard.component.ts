/*
* @Author: th_le
* @Date:   2016-11-24 10:15:47
* @Last Modified by:   th_le
* @Last Modified time: 2016-11-24 15:52:34
*/
import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroSrvice: HeroService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroSrvice.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }
}