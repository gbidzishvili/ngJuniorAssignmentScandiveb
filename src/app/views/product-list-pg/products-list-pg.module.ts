import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListPgRoutingModule } from './products-list-pg-routing.module';
import { CardListComponent } from './containers/card-list/card-list.component';
import { CardComponent } from './containers/card-list/card/card.component';

@NgModule({
  declarations: [CardListComponent, CardComponent],
  imports: [CommonModule, ProductsListPgRoutingModule],
})
export class ProductsListPgModule {}
