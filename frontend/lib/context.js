import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // increase quantity of products
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // decrease quantity of products
  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  // add product to cart
  const addToCart = (product, quantity) => {
    // check if product already exists in cart
    const productExists = cartItems.find((item) => item.slug === product.slug);
    if (productExists) {
      // increase quantity of product
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // add product to cart
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  // remove product from cart
  const removeFromCart = (product) => {
    // check if product is in the cart
    const productExists = cartItems.find((item) => item.slug === product.slug);
    if (productExists.quantity === 1) {
      // remove product from cart
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...productExists, quantity: productExists.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        quantity,
        increaseQuantity,
        decreaseQuantity,
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
