import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../models/product.model';

@Component({
  selector: 'app-receipt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.css'
})
export class ReceiptComponent {
  items = input<CartItem[]>([]);
  close = output<void>();

  IGV_RATE = 0.18;
  receiptNumber = `BOL-${Date.now().toString().slice(-6)}`;
  date = new Date();
  customer = 'Sofía Reyes';
  ruc = '10987654321';

  subtotal = computed(() =>
    this.items().reduce((sum, i) => sum + i.product.price * i.quantity, 0)
  );
  igv = computed(() => this.subtotal() * this.IGV_RATE);
  total = computed(() => this.subtotal() + this.igv());

  onClose() { this.close.emit(); }
}
