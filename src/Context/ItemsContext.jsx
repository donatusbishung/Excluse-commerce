import { createContext, useContext, useState } from "react";

export const ItemsManipulation = createContext();

// eslint-disable-next-line react/prop-types
export default function ItemsContext({ children }) {
  const [wishlist, setWishlist] = useState(0);
  const [cart, setCart] = useState(0);

  const AddItemsWislist = () => {
    setWishlist((c) => c + 1);
  };
  const AddItemsCart = () => {
    setCart((c) => c + 1);
  };
  const RemoveItemsWislist = () => {
    setWishlist((c) => c - 1);
  };
  const RemoveItemsCart = () => {
    setCart((c) => c - 1);
  };
  return (
    <ItemsManipulation.Provider
      value={{
        wishlist,
        cart,
        RemoveItemsCart,
        RemoveItemsWislist,
        AddItemsCart,
        AddItemsWislist,
      }}>
      {children}
    </ItemsManipulation.Provider>
  );
}
