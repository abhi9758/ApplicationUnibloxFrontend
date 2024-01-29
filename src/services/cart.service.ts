import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080/cart'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  addItemToCart(item: Item): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/add`, item);
  }

  getCart(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get`);
  }
}
