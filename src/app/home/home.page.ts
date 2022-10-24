import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private router: Router) {}
  onGoToProduitPromo(){
    this.router.navigate(['/produit-promo']);
  }
  onGoToBateaux(){
    this.router.navigate(['/bateaux']);
  }
  onGoToRestaurants(){
    this.router.navigate(['/restaurants']);
  }
  onGoToContact(){
    this.router.navigate(['/contact']);
  }
  onGoToRecettes(){
    this.router.navigate(['/recettes']);
  }
  
}
