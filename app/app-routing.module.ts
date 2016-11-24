/*
* @Author: th_le
* @Date:   2016-11-24 15:04:39
* @Last Modified by:   th_le
* @Last Modified time: 2016-11-24 15:10:04
*/

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "detail/:id", component: HeroDetailComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}