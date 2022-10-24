import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-resto',
  templateUrl: './single-resto.page.html',
  styleUrls: ['./single-resto.page.scss'],
})
export class SingleRestoPage implements OnInit {

  restaurant : { 
    nom : string,
    img : string,
    description : string
  }  

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params =>
      {
        if (this.router.getCurrentNavigation().extras.state){
          this.restaurant = this.router.getCurrentNavigation().extras.state.restaurant;
          console.log(this.restaurant)
        }
      }
      )
    }

  ngOnInit() {
  }

}
