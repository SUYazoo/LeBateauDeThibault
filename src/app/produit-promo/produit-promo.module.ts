import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitPromoPageRoutingModule } from './produit-promo-routing.module';

import { ProduitPromoPage } from './produit-promo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitPromoPageRoutingModule
  ],
  declarations: [ProduitPromoPage]
})
export class ProduitPromoPageModule {}
