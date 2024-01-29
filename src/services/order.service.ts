import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order.models';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/order'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  checkout(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/checkout`, {});
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/list`);
  }

  getDiscountCodes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/discount-codes`);
  }
}
