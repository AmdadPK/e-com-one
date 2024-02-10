import React, { createContext, useState } from "react";
import all_product from '../data/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {
    products:[],
    items: 0,
    subtotal:0,
    discount: 0,
    grandtotal:0
  };
  // for (let index = 0; index < all_product.length+1; index++) {
  //   cart[index] = 0;
  // }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  //console.log(cartItems)
  
  const addToCart = (product) => {

      // product.qty = 0;
      setCartItems((prev) => {
        const existingProductIndex = prev.products.findIndex((prevProduct) => prevProduct.id === product.id);
    
        if (existingProductIndex !== -1) {
          const updatedProducts = [...prev.products];
          updatedProducts[existingProductIndex].qty += 1;
    
          return {
            ...prev,
            products: updatedProducts,
            items: prev.items + 1,
            subtotal: prev.subtotal + product.new_price,
            grandtotal: prev.grandtotal + product.new_price
          };
        } else {
          return {
            ...prev,
            products: [...prev.products, { ...product, qty: 1 }],
            items: prev.items + 1,
            subtotal: prev.subtotal + product.new_price,
            grandtotal: prev.grandtotal + product.new_price
          };
        }
      });
    console.log(cartItems)
  }
  
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId]-1}))
  }
  
  const contextValue = {all_product, cartItems, addToCart, removeFromCart};
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;