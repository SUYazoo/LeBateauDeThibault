import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ElementFullPage } from '../models/elementFullPage';
import { RecettesServices } from '../services/RecettesService';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {

  recettesList : ElementFullPage[]
  //constructor(private router: Router) { }
  constructor(private router: Router, private recettesServices: RecettesServices) { }

  ngOnInit() {
    this.recettesList = this.recettesServices.contenu.slice();
  }

  
  onLoadRecette(recette: {nom:string, nom_complet:string, img:string, description:string}){
    let navigationExtras : NavigationExtras = {
      state: {
        recette:recette
      }
    }
    this.router.navigate(['/single-recette'],navigationExtras)
  }

}