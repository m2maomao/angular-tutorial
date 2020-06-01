import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'vote',
    component: VotetakerComponent
  },
  {
    path: 'counter',
    component: CounterParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}