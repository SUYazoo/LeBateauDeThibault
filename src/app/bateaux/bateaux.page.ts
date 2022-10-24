import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router'
@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {
  bateauList = [
    {
      bateauName: 'GrosseMoula',
      bateauDescription: [
        'Ceci est un mensonge',
        'Cris du bateau : Mugiwaraaaaaa'
      ],
      bateauPhoto: "./assets/saphir.png",
    },{
      bateauName: 'Les cités de France',
      bateauDescription: [
        'Bateau qui viens tout droit du 93',
        'Cris du bateau: Artenaaaaaaaa'
      ],
      bateauPhoto:"./assets/aquilon.png",
    },
    {
      bateauName: 'La terreur de la poiskaille',
      bateauDescription: [
        'Il cest battu contre une baleine et il a gagner',
        'Cris du bateau: Suuuuuuuuuuuuuu'
      ],
      bateauPhoto:"./assets/deLaBrise.png",
    },{
      bateauName: 'El Predator',
      bateauDescription: [
        'Un des rares navire qui a rencontrer le MOBY DICK',
        'Cris du bateau: AAAARRRRRRRRRRRGHHHHHHHHHHHHH'
      ],
      bateauPhoto:"./assets/gastMicher@2x.png",
    }
  ]  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadBateau(name: string){
    /* let b = {};
    console.log("premier name ",name)
    switch (name) {
      case 'GrosseMoula': b = this.bateauList[0];
      case 'Les cités de France': b = this.bateauList[1];
      case 'La terreur de la poiskaille': b = this.bateauList[2]; 
      case 'El Predator' : b = this.bateauList[3]; 
    }   */
    console.log("JE SUIS ICI")
    let NavigationExtras: NavigationExtras = {
      
      state : {

        boat:name
        
      }
    }
    this.router.navigate(['/single-bateau'],NavigationExtras);
  }
  
}
