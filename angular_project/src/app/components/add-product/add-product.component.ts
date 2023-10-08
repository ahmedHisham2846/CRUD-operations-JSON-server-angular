import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productId: number = 0;

  productForm = new FormGroup({
    productName: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl(),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private productServices: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.productId = Number(this.activatedRoute.snapshot.params['id']);
    // this.productId = Number();

    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.productId = params['id'];
        
        if (this.productId != 0) {
          this.productServices.getProductById(this.productId).subscribe({
            next: (product: Iproduct) => {
              this.getProductName.setValue(product.productName);
              this.getProductPrice.setValue(product.price);
              this.getProductQuantity.setValue(product.quantity);
            },
          });
        } else {
          this.getProductName.setValue('');
          this.getProductPrice.setValue(null);
          this.getProductQuantity.setValue(null);
        }
      },
    });
  }

  get getProductName() {
    return this.productForm.controls['productName'];
  }

  get getProductPrice() {
    return this.productForm.controls['price'];
  }

  get getProductQuantity() {
    return this.productForm.controls['quantity'];
  }

  formOperation(e: Event): void {
    e.preventDefault();

    if (this.productId == 0) {
      this.productServices.addProduct(this.productForm.value).subscribe();
    } else {
      this.productServices
        .updateProduct(this.productId, this.productForm.value)
        .subscribe();
    }

    this.router.navigate(['/products']);
  }
}
