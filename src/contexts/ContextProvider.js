import React, { createContext, useContext, useState } from "react";
import { cartData } from "../data/dummy";

const StateContext = createContext();

// is Clicked Initial State
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

let initialCartProduct = [];
let initialTotalPrice = 0;

cartData.map(({ id, price }) => {
  initialCartProduct.push({ id, qty: 1 });
  initialTotalPrice += price;
});

// Context Provider
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartProduct);
  const [totalPrice, setTotalPrice] = useState(initialTotalPrice);

  // set theme mode handler
  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);

    setThemeSettings(false);
  };

  // set theme color handler
  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem("colorMode", color);

    setThemeSettings(false);
  };

  // handle navbutton click
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: !isClicked[clicked] });
  };

  // increment qty
  const incQty = (itemId) => {
    const newCartItems = [];
    cartItems.map(({ id, qty }) => {
      if (itemId === id) {
        newCartItems.push({ id, qty: qty + 1 });

        // update total price
        setTotalPrice(
          (prevTotalPrice) =>
            prevTotalPrice + cartData.find(({ id }) => itemId === id).price
        );
      } else {
        newCartItems.push({ id, qty });
      }
    });

    setCartItems(newCartItems);
  };

  // decrement qty
  const decQty = (itemId) => {
    const newCartItems = [];
    cartItems.map(({ id, qty }) => {
      let quantity = 1;
      if (itemId === id) {
        if (qty > 1) {
          quantity = qty - 1;

          // update total price
          setTotalPrice(
            (prevTotalPrice) =>
              prevTotalPrice - cartData.find(({ id }) => itemId === id).price
          );
        }
      } else {
        quantity = qty;
      }

      newCartItems.push({ id, qty: quantity });
    });

    setCartItems(newCartItems);
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
        initialState,
        cartItems,
        setCartItems,
        incQty,
        decQty,
        totalPrice,
        setTotalPrice,
      }}
    >
      {/* Render children (App) */}
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
