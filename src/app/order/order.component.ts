import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/order.models';
import { OrderService } from 'src/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls:['./order.component.css']
})
export class OrderComponent implements OnInit {
  // Holds the list of all orders
  orders: Order[] = [];

  // Holds the list of discount codes
  discountCodes: string[] = [];

  // Holds a subset of orders for the current page
  pagedOrders: Order[] = [];

  // Defines the number of orders to display on each page
  pageSize = 5;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    // Fetch orders and discount codes when the component initializes
    this.getOrders();
    this.getDiscountCodes();
  }

  /**
   * Retrieves the list of all orders from the OrderService.
   */
  getOrders() {
    this.orderService.getOrders().subscribe((data: Order[]) => {
      this.orders = data;
      // Initialize pagedOrders based on the default page size
      this.updatePagedOrders();
    });
  }

  /**
   * Updates pagedOrders based on the selected page.
   * @param event The page change event.
   */
  onPageChange(event: any) {
    // Update pagedOrders based on the selected page
    const startIndex = event.pageIndex * this.pageSize;
    this.pagedOrders = this.orders.slice(startIndex, startIndex + this.pageSize);
  }

  /**
   * Initializes pagedOrders based on the default page size.
   */
  updatePagedOrders() {
    this.pagedOrders = this.orders.slice(0, this.pageSize);
  }

  /**
   * Retrieves the list of available discount codes from the OrderService.
   */
  getDiscountCodes() {
    this.orderService.getDiscountCodes().subscribe((data: string[]) => {
      this.discountCodes = data;
    });
  }

  /**
   * Checks if the list of orders is not empty.
   * @returns True if the list of orders is not empty, otherwise false.
   */
  isOrdersNotEmpty(): boolean {
    return this.orders && this.orders.length > 0;
  }

  /**
   * Initiates the checkout process and updates orders and discount codes.
   */
  checkout() {
    this.orderService.checkout().subscribe(() => {
      // Refresh orders and discount codes after checkout
      this.getOrders();
      this.getDiscountCodes();
    });
  }

  /**
   * Generates a random image URL.
   * @returns A string representing a random image URL.
   */
  getRandomImage(): string {
    // Implement logic to get a random image URL
    // For example, you can have an array of image URLs and select one randomly
    const images = [
      'https://source.unsplash.com/random/200x200?sig=1',
      'https://source.unsplash.com/random/200x200?sig=2',
      'https://source.unsplash.com/random/200x200?sig=3',
      // Add more image URLs as needed
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
}
