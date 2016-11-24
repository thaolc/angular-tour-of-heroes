/*
* @Author: th_le
* @Date:   2016-11-22 16:40:53
* @Last Modified by:   th_le
* @Last Modified time: 2016-11-24 17:22:25
*/

import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { Hero } from "./hero";

@Injectable()

export class HeroService {
  private heroesUrl = 'app/heroes';

  constructor(private http: Http){}

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(response => response.json().data as Hero[])
                    .catch(this.handleError)
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000))
      .then(() => this.getHeroes()
    );
  }

  getHero(id: number):Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
}
