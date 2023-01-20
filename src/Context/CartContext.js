import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (id, title, image, price, rating) => {
    setItems([...items, { id, title, image, price, rating }]);
  };

  const deleteFromCart = (indexOfItemDeletion) => {
    const myArray = items;

    myArray.splice(indexOfItemDeletion - 1, 1);

    setItems([...myArray]);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
