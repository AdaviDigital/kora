/**
 * KORA — Cart
 * Client-side cart persisted to localStorage. Swap the storage calls for
 * real API/session calls when wiring up a backend (see README).
 */
const KORA_CART_KEY = "kora_cart_v1";

const KoraCart = {
  read() {
    try {
      const raw = localStorage.getItem(KORA_CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error("Kora cart read failed", err);
      return [];
    }
  },

  write(lines) {
    try {
      localStorage.setItem(KORA_CART_KEY, JSON.stringify(lines));
      this.syncBadges();
    } catch (err) {
      console.error("Kora cart write failed", err);
    }
  },

  add(productId, color, size, qty = 1) {
    const lines = this.read();
    const key = `${productId}::${color}::${size}`;
    const existing = lines.find((l) => l.key === key);
    if (existing) {
      existing.qty += qty;
    } else {
      lines.push({ key, productId, color, size, qty });
    }
    this.write(lines);
  },

  updateQty(key, qty) {
    let lines = this.read();
    if (qty <= 0) {
      lines = lines.filter((l) => l.key !== key);
    } else {
      const line = lines.find((l) => l.key === key);
      if (line) line.qty = qty;
    }
    this.write(lines);
  },

  remove(key) {
    const lines = this.read().filter((l) => l.key !== key);
    this.write(lines);
  },

  clear() {
    this.write([]);
  },

  count() {
    return this.read().reduce((sum, l) => sum + l.qty, 0);
  },

  lineItems() {
    return this.read()
      .map((line) => {
        const product = typeof koraGetProductBySlug === "function"
          ? KORA_PRODUCTS.find((p) => p.id === line.productId)
          : null;
        if (!product) return null;
        return { ...line, product };
      })
      .filter(Boolean);
  },

  subtotal() {
    return this.lineItems().reduce(
      (sum, l) => sum + l.qty * l.product.price,
      0
    );
  },

  syncBadges() {
    const count = this.count();
    document.querySelectorAll("[data-cart-count]").forEach((el) => {
      el.textContent = String(count);
      el.dataset.empty = count === 0 ? "true" : "false";
    });
  }
};

document.addEventListener("DOMContentLoaded", () => KoraCart.syncBadges());
