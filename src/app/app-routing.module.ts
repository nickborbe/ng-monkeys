import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonkeyListComponent } from './monkey-list/monkey-list.component';
import { MonkeyComponent } from './monkey/monkey.component';
import { MonkeyDetailsComponent } from './monkey-details/monkey-details.component';


const routes: Routes = [
  {
    path: '',
    component: MonkeyListComponent
  },

  {
    path: 'monkey/:id',
    component: MonkeyDetailsComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
