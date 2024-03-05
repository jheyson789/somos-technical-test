import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  public productId = '';
  constructor(
    private _route: ActivatedRoute,
    public _shoppingCart: ShoppingCartService
  ) {
    this.productId = this._route.snapshot.paramMap.get('productId') || '';
    console.log(this.productId);
  }

  range(num: number) {
    return new Array(num);
  }
}
