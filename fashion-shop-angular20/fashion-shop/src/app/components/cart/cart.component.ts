import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items = input<CartItem[]>([]);
  remove = output<string>();
  updateQty = output<{ id: string; qty: number }>();
  checkout = output<void>();

  IGV_RATE = 0.18;

  subtotal = computed(() =>
    this.items().reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  );

  igv = computed(() => this.subtotal() * this.IGV_RATE);
  total = computed(() => this.subtotal() + this.igv());

  onRemove(id: string) { this.remove.emit(id); }
  onDecrease(item: CartItem) { this.updateQty.emit({ id: item.product.id, qty: item.quantity - 1 }); }
  onIncrease(item: CartItem) { this.updateQty.emit({ id: item.product.id, qty: item.quantity + 1 }); }
  onCheckout() { this.checkout.emit(); }
}
