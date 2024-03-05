import { Component } from '@angular/core';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  opened: boolean = true;
  constructor(public _shoppingCart: ShoppingCartService) {}

  toggleSidebar(): void {
    this.opened = !this.opened;
  }
}
