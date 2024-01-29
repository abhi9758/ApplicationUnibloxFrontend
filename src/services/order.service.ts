import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order.models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // The base URL for the backend Order API. Update this with your actual backend URL.
  private apiUrl = 'http://localhost:8080/order';

  constructor(private http: HttpClient) {}

  /**
   * Initiates the checkout process to place an order.
   * @returns An Observable<void>.
   */
  checkout(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/checkout`, {});
  }

  /**
   * Retrieves a list of previous orders.
   * @returns An Observable<Order[]> representing the list of orders.
   */
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/list`);
  }

  /**
   * Retrieves a list of available discount codes.
   * @returns An Observable<string[]> representing the list of discount codes.
   */
  getDiscountCodes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/discount-codes`);
  }
}
