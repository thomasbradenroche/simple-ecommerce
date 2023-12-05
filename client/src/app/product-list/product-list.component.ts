import { Component } from '@angular/core';
import { ProductService } from '../product.service.spec';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  standalone: true,
  providers: [ProductService, HttpClient],
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products: Observable<Product[]> = new Observable<Product[]>();

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    // Use the productService to fetch products
    this.products = this.productService.getProducts();
  }
}
