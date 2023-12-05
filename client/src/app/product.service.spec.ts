import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://localhost:3000';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return new Observable<any[]>();
    // return this.http.get<any[]>(`${this.apiUrl}/api/products`);
  }

  getOrderedProducts(): Observable<any[]> {
    // Assuming there is a different API endpoint for ordered products
    // return this.http.get<any[]>(`${this.apiUrl}/api/products`);
    return new Observable<any[]>();
  }
}
