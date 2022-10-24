import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleRestoPage } from './single-resto.page';

const routes: Routes = [
  {
    path: '',
    component: SingleRestoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleRestoPageRoutingModule {}
