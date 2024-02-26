import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareProductsService } from '../../shared/services/share-products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list-pg',
  templateUrl: './product-list-pg.component.html',
  styleUrl: './product-list-pg.component.css',
})
export class ProductListPgComponent implements OnInit, OnDestroy {
  shareProductsSrvSubscription!: Subscription;

  constructor(private shareProductsService: ShareProductsService) {}

  ngOnInit() {
    this.shareProductsSrvSubscription =
      this.shareProductsService.productsSource.subscribe((list) =>
        console.log('listPage', list)
      );
  }
  addBtnClickedSubs() {
    console.log('add clicked in product-list');
    // this.formArea.onSubmit();
  }
  deletelBtnClickedSubs() {
    console.log('delete clicked in product-list');
  }
  ngOnDestroy(): void {
    this.shareProductsSrvSubscription.unsubscribe();
  }
}
