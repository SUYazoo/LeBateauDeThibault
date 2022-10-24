import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product{
  id: number;
  name: string;
  price: number;
  amount: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[]= [
    {
      id: 0, name : 'Moules de pêche', price : 7, amount : 0
    },
    {
      id: 1, name : 'Bouquets cuits', price : 8, amount : 0
    },
    {
      id: 2, name : 'Huîtres N°2 St Vaast', price : 9.5, amount : 0
    },
    {
      id: 3, name : 'Huîtres N°2 Or St Vaast', price : 12, amount : 0
    },
    {
      id: 4, name : 'Carpes Gucci', price : 19, amount : 0
    },
    {
      id: 5, name : 'Sardine du futur', price : 24, amount : 0
    },
    {
      id: 6, name : 'Espadon du 93', price : 38, amount : 0
    },
    {
      id: 7, name : 'Tournée de bar', price : 48, amount : 0
    }
  ]
  private cart = []
  private cartItemCount = new BehaviorSubject(0);

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
