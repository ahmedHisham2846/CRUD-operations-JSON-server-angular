import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproduct } from '../models/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>('http://localhost:3000/products');
  }

  getProductById(id: number): Observable<Iproduct> {
    return this.http.get<Iproduct>(`http://localhost:3000/products/${id}`);
  }

  addProduct(product: any): Observable<Iproduct> {
    return this.http.post<Iproduct>(`http://localhost:3000/products`, product);
  }

  updateProduct(id: number, product: any): Observable<Iproduct> {
    return this.http.put<Iproduct>(
      `http://localhost:3000/products/${id}`,
      product
    );
  }

  deleteProduct(id: number): Observable<Iproduct> {
    return this.http.delete<Iproduct>(`http://localhost:3000/products/${id}`);
  }
}
