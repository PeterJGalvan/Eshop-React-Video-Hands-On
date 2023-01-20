import React from "react";
import "./CSS/CheckoutProduct.css";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

function CheckoutProduct() {
  const { items } = useContext(CartContext);
  const { deleteFromCart } = useContext(CartContext);

  return (
    <div>
      {items.map((item, i = -1) => (
        <div className="checkoutProduct">
          <img
            src={item.image}
            alt="checkoutProduct"
            className="checkoutProduct__image"
          />
          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{item.title}</p>

            <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{item.price}</strong>
            </p>

            <div className="checkoutProduct__rating">
              {Array(item.rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>

            <button onClick={() => deleteFromCart(i + 1)}>
              Remove From Basket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CheckoutProduct;
