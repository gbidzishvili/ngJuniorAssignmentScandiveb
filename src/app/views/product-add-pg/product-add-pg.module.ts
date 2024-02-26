import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddPgComponent } from './product-add-pg.component';
import { ProductListPgComponent } from '../product-list-pg/product-list-pg.component';
import { FormAreaComponent } from './components/form-area/form-area.component';
import { TitleBarComponent } from '../../shared/components/title-bar/title-bar.component';
import { ProductAddRoutingModule } from './product-add-routing.module';
import { MaterialImportsModule } from './material/material-imports.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductAddPgComponent,
    ProductListPgComponent,
    TitleBarComponent,
    FormAreaComponent,
  ],
  imports: [
    CommonModule,
    ProductAddRoutingModule,
    MaterialImportsModule,
    ReactiveFormsModule,
  ],
})
export class ProductAddPgModule {}
