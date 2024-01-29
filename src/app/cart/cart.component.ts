import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any = {};

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.cartService.getCart().subscribe((data: any) => {
      this.cart = data;
    });
  }

  addItemToCart() {
    const item: Item = { name: 'Random Product', price: 39.99 }; // Example item
    this.cartService.addItemToCart(item).subscribe(() => {
      this.getCart();
    });
  }

}
