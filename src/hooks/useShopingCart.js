import { useState } from "react";

const useShopingCart = () => {
  const [shopingCart, setShopingCart] = useState([]);
  const [isShopingCartEmpty, setIsShopingCartEmpty] = useState(true);
  const [totalShopping, setTotalShopping] = useState(0);
  const [isUpperLimitItemInStock, setIsUpperLimitItemInStock] = useState(false);

  const setAShopingCart = (value) => setShopingCart(value);
  const setIfShopingCartEmpty = (value) => setIsShopingCartEmpty(value);
  const setATotalShopping = (value) => setTotalShopping(value);
  const setAUpperLimitItemInStock = (value) => setIsUpperLimitItemInStock(value);

  return {
    shopingCart,
    setAShopingCart,
    isShopingCartEmpty,
    setIfShopingCartEmpty,
    totalShopping,
    setATotalShopping,
    isUpperLimitItemInStock,
    setAUpperLimitItemInStock
  };
};

export default useShopingCart;
