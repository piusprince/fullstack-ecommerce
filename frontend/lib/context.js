import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [showcart, setShowCart] = useState(false);
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

  return (
    <ShopContext.Provider
      value={{
        quantity,
        increaseQuantity,
        decreaseQuantity,
        showcart,
        setShowCart,
        cartItems,
        setCartItems,
        addToCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
