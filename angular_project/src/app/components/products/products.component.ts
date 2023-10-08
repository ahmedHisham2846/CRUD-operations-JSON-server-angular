import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private productServices: ProductService) {}

  products: Iproduct[] = [];

  ngOnInit(): void {
    this.setProducts();
  }

  setProducts(): void {
    this.productServices.getAllProducts().subscribe({
      next: (returnedProducts: Iproduct[]) => {
        this.products = returnedProducts;
      },
    });
  }

  deleteProduct(id: number) {
    console.log(this.products.length);
    this.productServices.deleteProduct(id).subscribe({
      complete: () => {
        this.products = this.products.filter((p) => p.id !== id);
      },
    });
    console.log(this.products.length);
  }
}
