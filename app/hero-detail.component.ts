/*
* @Author: th_le
* @Date:   2016-11-22 14:30:38
* @Last Modified by:   th_le
* @Last Modified time: 2016-11-24 15:52:07
*/

import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import 'rxjs/add/operator/switchMap';

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
  moduleId: module.id,
  selector: "hero-detail",
  templateUrl: "hero-detail.component.html",
  styleUrls: ['hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor( private heroService: HeroService, private route: ActivatedRoute, private location: Location){}

  ngOnInit(){
    this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}