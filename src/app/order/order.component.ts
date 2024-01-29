import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/order.models';
import { OrderService } from 'src/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];
  discountCodes: string[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.getOrders();
    this.getDiscountCodes();
  }

  getOrders() {
    this.orderService.getOrders().subscribe((data: Order[]) => {
      this.orders = data;
    });
  }

  getDiscountCodes() {
    this.orderService.getDiscountCodes().subscribe((data: string[]) => {
      this.discountCodes = data;
    });
  }

  checkout() {
    this.orderService.checkout().subscribe(() => {
      this.getOrders();
      this.getDiscountCodes();
    });
  }
}
