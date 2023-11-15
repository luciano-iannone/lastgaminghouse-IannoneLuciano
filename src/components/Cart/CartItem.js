import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './CartItem.css'

const CartItem = ({ id, name, price, quantity }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <div className="cart-item">
      <div className="item-details">
        <h4>{name}</h4>
        <p>Price: ${parseFloat(price).toFixed(2)}</p>
        <p>Quantity: {quantity}</p>
        <div className="quantity-controls">
          <button onClick={() => handleQuantityChange(quantity - 1)} disabled={quantity <= 1}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
        </div>
        <button onClick={handleRemoveFromCart} className="remove-button">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
