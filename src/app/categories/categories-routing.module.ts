import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { NationalNewsComponent } from './national-news/national-news.component';
import { NewsComponent } from './news/news.component';
import { SportsComponent } from './sports/sports.component';
import { StateNewsComponent } from './state-news/state-news.component';

const routes: Routes = [
  {path:'news', component:NewsComponent},
  {path:'national-news', component:NationalNewsComponent},
  {path:'state-news', component:StateNewsComponent},
  {path:'sports', component:SportsComponent},
  {path:'entertainment', component:EntertainmentComponent},
  {path:'health', component:HealthComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
