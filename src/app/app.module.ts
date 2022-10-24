import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CartModalPageModule } from './pages/cart-modal/cart-modal.module';
import { RestaurantsService } from './services/RestaurantsService';
import { RecettesPage } from './recettes/recettes.page';
import { RecettesServices } from './services/RecettesService';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,CartModalPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, RestaurantsService, RecettesServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
