import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Product } from '../../../views/product-add-pg/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.css',
})
export class TitleBarComponent {
  @Input() button1!: string;
  @Input() button2!: string;
  @Output()
  saveBtnClickedEvent: EventEmitter<Product> = new EventEmitter();
  @Output()
  cancelBtnClickedEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  addBtnClickedEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  deleteBtnClickedEvent: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) {}
  onBtn1Click() {
    this.button1 == 'save' ? this.saveProduct() : this.addProduct();
  }
  onBtn2Click() {
    this.button2 == 'cancel' ? this.cancelForm() : this.deleteProduct();
  }
  saveProduct() {
    this.saveBtnClickedEvent.emit();
    this.router.navigate(['/product-list']);
  }
  cancelForm() {
    this.cancelBtnClickedEvent.emit();
    this.router.navigate(['/product-list']);
  }
  addProduct() {
    this.addBtnClickedEvent.emit();
    this.router.navigate(['/add-product']);
  }
  deleteProduct() {
    this.deleteBtnClickedEvent.emit();
    this.router.navigate(['/add-product']);
  }
}
