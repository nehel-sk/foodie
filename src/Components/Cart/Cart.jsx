import React from 'react';
import './Cart.css';

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      quantity: 2,
      price: 10.99
    },
    {
      id: 2,
      name: 'Cheeseburger',
      quantity: 1,
      price: 8.99
    },
    {
      id: 3,
      name: 'Caesar Salad',
      quantity: 3,
      price: 7.99
    }
    // Add more cart items as needed
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total Amount: ${calculateTotal()}</h3>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
