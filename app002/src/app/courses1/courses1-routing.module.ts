import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Courses1Page } from './courses1.page';

const routes: Routes = [
  {
    path: '',
    component: Courses1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Courses1PageRoutingModule {}
