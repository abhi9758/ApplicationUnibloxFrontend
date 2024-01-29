import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // Holds the current contents of the cart
  cart: any = {};

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Fetch and update the cart when the component initializes
    this.getCart();
  }

  /**
   * Retrieves the current contents of the cart from the CartService.
   */
  getCart() {
    this.cartService.getCart().subscribe((data: any) => {
      this.cart = data;
    });
  }

  /**
   * Adds a sample item to the cart and updates the cart display.
   * In a real application, this method would add the selected item to the cart.
   */
  addItemToCart() {
    const item: Item = { name: 'Random Product', price: 39.99 }; // Example item
    this.cartService.addItemToCart(item).subscribe(() => {
      this.getCart(); // Update the cart display after adding the item
    });
  }

  /**
   * Checks if the cart is not empty.
   * @returns True if the cart is not empty, otherwise false.
   */
  isCartNotEmpty(): boolean {
    return this.cart && Object.keys(this.cart).length > 0;
  }

  /**
   * Generates a random small round image URL.
   * @returns A string representing a random small round image URL.
   */
  getRandomSmallRoundImage(): string {
    // Implement logic to get a random small round image URL
    // For example, you can have an array of small round image URLs and select one randomly
    const smallRoundImages = [
      'https://source.unsplash.com/random/200x200?sig=1',
      'https://source.unsplash.com/random/200x200?sig=2',
      'https://source.unsplash.com/random/200x200?sig=3',
      // Add more small round image URLs as needed
    ];

    const randomIndex = Math.floor(Math.random() * smallRoundImages.length);
    return smallRoundImages[randomIndex];
  }
}
