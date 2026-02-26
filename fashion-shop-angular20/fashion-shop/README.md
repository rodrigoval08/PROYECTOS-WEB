# VELOUR Studio — Fashion Shop 🛍️

Aplicación Angular 20 de tienda de moda con diseño editorial refinado.

## ✨ Características

- **Lista de productos** — 6 prendas con categorías, badges y emojis
- **Carrito interactivo** — Agregar, quitar, ajustar cantidades
- **Cálculo de IGV** — Subtotal + 18% automático
- **Boleta electrónica** — Modal con número único, datos del cliente, tabla de items y código de barras decorativo
- **Signals de Angular 20** — `signal()`, `computed()`, `input()`, `output()` (sin `@Input`/`@Output` decoradores)
- **Standalone components** — Sin NgModules
- **Control flow moderno** — `@for`, `@if` en templates

## 🚀 Cómo ejecutar

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
ng serve

# Abrir en el navegador
http://localhost:4200
```

## 📁 Estructura del proyecto

```
src/
  app/
    models/
      product.model.ts          # Interfaces Product, CartItem + Type Guard isProduct()
    components/
      product-list/             # Grid de 6 productos con badges
      cart/                     # Lista del carrito + totales + botón checkout
      receipt/                  # Modal de boleta electrónica
    app.component.ts            # Shell principal con signals
    app.component.html
    app.component.css
    app.config.ts
  main.ts
  styles.css
  index.html
```

## 🎨 Stack de diseño

- **Fuentes**: Playfair Display (serif elegante) + DM Sans (sans legible)
- **Colores**: Fondo bone #f5f0eb, tinta negra #0e0e0e, acento rojo #c9472b, dorado #b8975a
- **Estética**: Editorial de moda, minimalismo refinado con detalles tipográficos

## 🔬 Angular 20 features usadas

| Feature | Dónde |
|---|---|
| `signal()` | `cartItems`, `showReceipt` en AppComponent |
| `computed()` | `subtotal`, `igv`, `total`, `totalItems` |
| `input()` (sin decorador) | Todos los componentes hijos |
| `output()` (sin decorador) | ProductList, Cart, Receipt |
| `@for` con `track` | Listas de productos y carrito |
| `@if` | Boleta, carrito vacío, badge de cantidad |
| Standalone components | Todos los componentes |
| Type Guard | `isProduct()` en product.model.ts |
