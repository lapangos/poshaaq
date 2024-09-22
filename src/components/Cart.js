import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="cart-details">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
