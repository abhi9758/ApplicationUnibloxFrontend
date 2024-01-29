import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // The base URL for the backend API. Update this with your actual backend URL.
  private apiUrl = 'http://localhost:8080/cart';

  constructor(private http: HttpClient) {}

  /**
   * Adds an item to the cart.
   * @param item The item to be added to the cart.
   * @returns An Observable<void>.
   */
  addItemToCart(item: Item): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/add`, item);
  }

  /**
   * Retrieves the current contents of the cart.
   * @returns An Observable<any> representing the cart contents.
   */
  getCart(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get`);
  }
}
