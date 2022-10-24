import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ElementPage } from '../models/elementPage';
import { RestaurantsService } from '../services/RestaurantsService';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {


  restaurantsList : ElementPage[]
  constructor(private router: Router, private restaurantsService : RestaurantsService){

  }
   
   
  ngOnInit() {
    this.restaurantsList = this.restaurantsService.contenu.slice();
  }

   
  onLoadRestaurant(restaurant : {nom:string, img:string, description:string}){
    let navigationExtras : NavigationExtras = {
      state: {
        restaurant:restaurant
      }
    }
    this.router.navigate(['/single-resto'],navigationExtras)
  }

}