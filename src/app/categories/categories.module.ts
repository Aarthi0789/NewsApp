import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { NationalNewsComponent } from './national-news/national-news.component';
import { StateNewsComponent } from './state-news/state-news.component';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';


@NgModule({
  declarations: [
    NationalNewsComponent,
    StateNewsComponent,
    SportsComponent,
    EntertainmentComponent,
    HealthComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
