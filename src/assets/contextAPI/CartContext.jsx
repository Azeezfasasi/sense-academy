import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the Cart Context
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

// CartContext Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from local storage on initialization
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save cart items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if item is already in cart
      const isItemInCart = prevItems.some((cartItem) => cartItem._id === item._id);
      if (isItemInCart) {
        return prevItems; // Item is already in the cart, don't add again
      }
      return [...prevItems, item]; // Add item to cart
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  // Clear all items from cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};