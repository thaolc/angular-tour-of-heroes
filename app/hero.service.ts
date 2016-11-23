/*
* @Author: th_le
* @Date:   2016-11-22 16:40:53
* @Last Modified by:   th_le
* @Last Modified time: 2016-11-22 16:58:16
*/

import { Injectable } from "@angular/core";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

@Injectable()

export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000))
      .then(() => this.getHeroes()
    );
  }
}
