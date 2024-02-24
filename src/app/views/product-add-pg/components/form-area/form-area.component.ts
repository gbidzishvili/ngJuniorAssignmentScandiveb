import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { productModel } from '../../models/product.model';

@Component({
  selector: 'app-form-area',
  templateUrl: './form-area.component.html',
  styleUrl: './form-area.component.css',
})
export class FormAreaComponent {
  products = ['DVD', 'Book', 'Furniture'];
  productForm!: FormGroup;
  product: productModel = new productModel();
  @Input()
  saved: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.productForm = new FormGroup({
      sku: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(0.01)]),
      productType: new FormControl('DVD', [Validators.required]),
      size: new FormControl('', []),
      weight: new FormControl('', []),
      furniture: new FormGroup({
        height: new FormControl('', []),
        width: new FormControl('', []),
        length: new FormControl('', []),
      }),
    });
  }
  logForm() {}
  onSubmit() {
    this.product = this.productForm.value;
    console.log('print product value', this.product);
    // if (this.productForm.valid) {
    //   // this.productService.addProduct(this.productForm.value).subscribe({
    //   //   next: () => this.router.navigate(['/product-list']),
    //   //   error: (err) => alert(err.message), // Handle errors, e.g., duplicate SKU
    //   // });
    // } else {
    //   alert('Please, submit required data');
    // }
  }

  cancel() {
    this.router.navigate(['/product-list']); // Navigate back without adding a product
  }
}
