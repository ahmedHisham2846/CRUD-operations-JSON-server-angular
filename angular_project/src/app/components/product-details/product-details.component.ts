import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0;
  product: Iproduct = {
    id: 0,
    productName: '',
    price: 0,
    quantity: 0,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private productServices: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.activatedRoute.snapshot.params['id']);
    this.productServices.getProductById(this.productId).subscribe({
      next: (product: Iproduct) => {
        this.product = product;
      },
    });
  }
}
