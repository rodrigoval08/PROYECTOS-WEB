import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  addToCart = output<Product>();

  products: Product[] = [
    { id: 'BLZ-001', name: 'Blazer Estructurado', price: 289.90, category: 'Outerwear', badge: 'nuevo', emoji: '🧥' },
    { id: 'VES-002', name: 'Vestido Midi Seda', price: 199.50, category: 'Vestidos', badge: 'exclusivo', emoji: '👗' },
    { id: 'PAL-003', name: 'Pantalón Wide Leg', price: 149.90, category: 'Pantalones', badge: 'oferta', emoji: '👖' },
    { id: 'BOL-004', name: 'Bolso Estructurado', price: 319.00, category: 'Accesorios', emoji: '👜' },
    { id: 'SWT-005', name: 'Sweater Cachemira', price: 245.00, category: 'Tops', badge: 'nuevo', emoji: '🧶' },
    { id: 'ZAP-006', name: 'Zapatos Mule Suede', price: 185.00, category: 'Calzado', emoji: '👠' },
  ];

  onAdd(product: Product) {
    this.addToCart.emit(product);
  }

  badgeLabel(badge?: string): string {
    const map: Record<string, string> = { nuevo: 'Nuevo', oferta: 'Oferta', exclusivo: 'Exclusivo' };
    return badge ? map[badge] : '';
  }
}
