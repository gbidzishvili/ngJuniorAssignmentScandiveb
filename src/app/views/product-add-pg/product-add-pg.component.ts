import { Component, ViewChild } from '@angular/core';
import { FormAreaComponent } from './components/form-area/form-area.component';

@Component({
  selector: 'app-product-add-pg',
  templateUrl: './product-add-pg.component.html',
  styleUrl: './product-add-pg.component.css',
})
export class ProductAddPgComponent {
  @ViewChild('formArea') formArea!: FormAreaComponent;
  saveBtnClickedSubs() {
    console.log('save clicked in add-product');
    // this.formArea.onSubmit();
  }
  cancelBtnClickedSubs() {
    console.log('cancle clicked in add-product');
  }
}
