import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleRestoPageRoutingModule } from './single-resto-routing.module';

import { SingleRestoPage } from './single-resto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleRestoPageRoutingModule
  ],
  declarations: [SingleRestoPage]
})
export class SingleRestoPageModule {}
