import React from "react";
import "./CSS/Subtotal.css";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

function Subtotal() {
  const { items } = useContext(CartContext);

  const price = items?.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="subtotal">
      <p>
        Subtotal ({items.length} items):{" "}
        <strong>${Math.round(price * 100) / 100}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Proceed From Basket</button>
    </div>
  );
}

export default Subtotal;
