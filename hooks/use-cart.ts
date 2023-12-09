import { create } from "zustand";
import { IProduct } from "../types";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-toastify";

interface CartStore {
  items: IProduct[];
  addItem: (item: IProduct) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (product: IProduct) => {
        const currentItems = get().items;
        const existingItems = currentItems.find(
          (item) => item.id === product.id
        );

        if (existingItems) {
          return toast.error("Item already exists in cart!");
        }

        set({ items: [...currentItems, product] });
        toast.success("Item added to cart successfully!");
      },

      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item removed from cart successfully!");
      },

      removeAll: () => set({ items: [] }),
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);
