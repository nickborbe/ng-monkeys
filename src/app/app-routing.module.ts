import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonkeyListComponent } from './monkey-list/monkey-list.component';
import { MonkeyComponent } from './monkey/monkey.component';


const routes: Routes = [
  {
    path: '',
    component: MonkeyListComponent
  },

  {
    path: 'monkey/:id',
    component: MonkeyComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
