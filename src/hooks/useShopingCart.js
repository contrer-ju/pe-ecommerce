import { useState } from "react";

const useShopingCart = () => {
  const [shopingCart, setShopingCart] = useState([]);
  const [isShopingCartEmpty, setIsShopingCartEmpty] = useState(true);
  const [totalShopping, setTotalShopping] = useState(0);
  const [isUpperLimitItemInStock, setIsUpperLimitItemInStock] = useState(false);
  const [isLowerLimitItemInStock, setIsLowerLimitItemInStock] = useState(false);
  const [idItemToRemoveFromCart, setIdItemToRemoveFromCart] = useState(null);

  const setAShopingCart = (value) => setShopingCart(value);
  const setIfShopingCartEmpty = (value) => setIsShopingCartEmpty(value);
  const setATotalShopping = (value) => setTotalShopping(value);
  const setAUpperLimitItemInStock = (value) => setIsUpperLimitItemInStock(value);
  const setALowerLimitItemInStock = (value) => setIsLowerLimitItemInStock(value);
  const setAIdItemToRemoveFromCart = (value) => setIdItemToRemoveFromCart(value);

  return {
    shopingCart,
    setAShopingCart,
    isShopingCartEmpty,
    setIfShopingCartEmpty,
    totalShopping,
    setATotalShopping,
    isUpperLimitItemInStock,
    setAUpperLimitItemInStock,
    isLowerLimitItemInStock,
    setALowerLimitItemInStock,
    idItemToRemoveFromCart,
    setAIdItemToRemoveFromCart
  };
};

export default useShopingCart;
