import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitPromoPage } from './produit-promo.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitPromoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitPromoPageRoutingModule {}
