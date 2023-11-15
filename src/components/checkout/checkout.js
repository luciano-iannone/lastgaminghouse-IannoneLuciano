import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Checkout = () => {
    const { cart, total, clearCart } = useContext(CartContext);

    const handleCheckout = () => {
        alert('Thank you for your purchase!');
        clearCart();
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            {cart.map((item) => (
                <div key={item.id} className="checkout-item">
                    <span>{item.name}</span>
                    <span>Quantity: {item.quantity}</span>
                    <span>Price: ${item.price * item.quantity}</span>
                </div>
            ))}
            <div className="total">
                <span>Total: ${total}</span>
            </div>
            <button onClick={handleCheckout} className="checkout-button">
                Checkout
            </button>
        </div>
    );
};

export default Checkout;
