import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../../views/product-add-pg/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShareProductsService {
  productsSource = new BehaviorSubject<Product[]>([]);
  public products$ = this.productsSource.asObservable();
  constructor() {}
  addProduct(product: Product) {
    const currentValue = this.productsSource.value;
    this.productsSource.next([...currentValue, product]);
  }
}
