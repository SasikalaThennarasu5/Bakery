import React, { createContext, useContext, useMemo, useState } from "react";

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);     // [{id, name, ...}]
  const [cart, setCart] = useState([]);             // [{product, qty}]

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((i) => i.product.id === product.id);
      if (found) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { product, qty }];
    });
  };

  const value = useMemo(
    () => ({ wishlist, cart, toggleWishlist, addToCart }),
    [wishlist, cart]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => useContext(StoreContext);
