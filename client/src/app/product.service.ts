// your-service.ts or your-component.ts
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://localhost:3000';
  constructor(private http: HttpClient, private httpHandler: HttpHandler) {}
  getProducts() {
    return this.http.get('https://localhost:3000/api/products');
  }
  getOrderedProducts() {
    return this.http.get('https://localhost:3000/api/products');
  }
}
