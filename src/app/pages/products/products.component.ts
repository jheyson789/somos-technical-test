import { Component } from '@angular/core';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { ProductService } from '../../shared/services/product.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../shared/interfaces/product.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  public products = new BehaviorSubject<Product[]>([]);

  public productForm: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.productForm = this.generateForm();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadProducts();
  }

  generateForm(product?: Product) {
    return this.fb.group({
      name: [product?.name || ''],
      price: [product?.price || 0],
    });
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (values) => {
        this.products.next(values);
      },
    });
  }

  actionToProduct(data: { productId: string; action: string }) {
    if (data.action === 'eliminar') {
      this.productService
        .deleteProduct(data.productId)
        .subscribe(() => alert('Se elimino wel producto'));
    }
  }
}
