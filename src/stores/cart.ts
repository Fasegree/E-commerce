import type { IProductInCart } from "@/assets/types/Products";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({ items: [] as IProductInCart[] }),
  actions: {
    addToCart(item: IProductInCart) {
      const existingItem = this.items.find(
        (i) =>
          i.id === item.id && i.color[0] === item.color[0] && i.size[0] === item.size[0]
      );
      if (existingItem) {
        existingItem.inCart += item.inCart;
      } else {
        this.items.push(item);
      }
    },
    removeFromCart(item: IProductInCart) {
      console.log("removeFromCart", item);
      this.items = this.items.filter(
        (i) =>
          i.id !== item.id || i.color[0] !== item.color[0] || i.size[0] !== item.size[0]
      );
    },
  },
});
