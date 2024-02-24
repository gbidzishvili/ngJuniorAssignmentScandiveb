import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddPgComponent } from './product-add-pg.component';

const routes: Routes = [
  { path: 'add-product', component: ProductAddPgComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductAddRoutingModule {}
