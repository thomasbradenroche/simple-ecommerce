import { Component } from '@angular/core';
import { ProductService } from '../product.service.spec';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.scss',
})
export class OrderConfirmationComponent {
  orderedProducts: Observable<Product[]> = new Observable<Product[]>(); // Assuming you have a property to store ordered products

  constructor(private productService: ProductService) {} // Inject the ProductService or relevant service

  ngOnInit() {
    // Assuming you have a method in ProductService to get ordered products
    this.fetchOrderedProducts();
  }

  fetchOrderedProducts() {
    // Use the productService to fetch ordered products
    this.orderedProducts = this.productService.getOrderedProducts();
  }
}
