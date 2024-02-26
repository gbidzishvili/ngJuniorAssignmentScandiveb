import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListPgComponent } from './product-list-pg.component';

const routes: Routes = [
  { path: 'product-list', component: ProductListPgComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(routes)],
})
export class ProductsListPgRoutingModule {}
