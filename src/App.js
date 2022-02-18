import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./routes/NavBar";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import Product from "./routes/Product";
import Cart from "./routes/Cart";
import NotFound from "./routes/NotFound";
import onGettingData from "./handlers/onGettingData";
import onMappingData from "./handlers/onMappingData";
import onAddToCart from "./handlers/onAddToCart";
import onDeleteFromCart from "./handlers/onDeleteFromCart";
import onSelectedItem from "./handlers/onSelectedItem";
import onClearSelectedItem from "./handlers/onClearSelectedItems";
import onCalculateTotalShopping from "./handlers/onCalculateTotalShopping";
import onIncrementItemOnCart from "./handlers/onIncrementItemOnCart";
import onDecrementItemOnCart from "./handlers/onDecrementItemOnCart";
import onOffTooltips from "./handlers/onOffTooltips";
import onEmptyCart from "./handlers/onEmptyCart";
import useGetData from "./hooks/useGetData";
import usePhraseSearch from "./hooks/usePhraseSearch";
import useProductPage from "./hooks/useProductPage";
import useShopingCart from "./hooks/useShopingCart";
import useStock from "./hooks/useStock";
import "./Styles.css";

function App() {
  const {
    apiErrorStatus,
    setAnApiErrorStatus,
    setAnApiErrorMessage,
    isLoading,
    setTrueIsLoading,
    setFalseIsLoading,
    searchResult,
    setASearchResult,
    timeLoading,
    setATimeLoading,
  } = useGetData();

  const { phraseSearch, setAPhraseSearch, clearAPhraseSearch } =
    usePhraseSearch();

  const {
    productToShow,
    setAProductToShow,
    productInitStock,
    setAProductInitStock,
    productQtySelected,
    setAProductQtySelected,
  } = useProductPage();

  const {
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
    setAIdItemToRemoveFromCart,
  } = useShopingCart();

  const { stock, updateStock } = useStock();

  useEffect(() => {
    if (shopingCart.length === 0) setIfShopingCartEmpty(true);
    else setIfShopingCartEmpty(false);
  }, [setIfShopingCartEmpty, shopingCart.length]);

  useEffect(() => {
    onCalculateTotalShopping(shopingCart, setATotalShopping);
  }, [shopingCart, setATotalShopping]);

  useEffect(() => {
    if (isUpperLimitItemInStock) {
      const interval = setInterval(() => {
        onOffTooltips(shopingCart, setAShopingCart);
        setAUpperLimitItemInStock(false);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [
    isUpperLimitItemInStock,
    shopingCart,
    setAShopingCart,
    setAUpperLimitItemInStock,
  ]);

  useEffect(() => {
    if (isLowerLimitItemInStock) {
      const interval = setInterval(() => {
        onDeleteFromCart(
          idItemToRemoveFromCart,
          shopingCart,
          setAShopingCart,
          stock,
          updateStock
        );
        setALowerLimitItemInStock(false);
        setAIdItemToRemoveFromCart(null);
      }, 600);
      return () => clearInterval(interval);
    }
  }, [
    isLowerLimitItemInStock,
    shopingCart,
    setAShopingCart,
    setAUpperLimitItemInStock,
    idItemToRemoveFromCart,
    setALowerLimitItemInStock,
    setAIdItemToRemoveFromCart,
    stock,
    updateStock,
  ]);

  return (
    <BrowserRouter>
      <NavBar
        {...{
          phraseSearch,
          setAPhraseSearch,
          clearAPhraseSearch,
          onGettingData,
          onMappingData,
          isLoading,
          setTrueIsLoading,
          setFalseIsLoading,
          searchResult,
          setASearchResult,
          setATimeLoading,
          setAProductToShow,
          setAProductInitStock,
          setAProductQtySelected,
          onClearSelectedItem,
          isShopingCartEmpty,
          setAnApiErrorStatus,
          setAnApiErrorMessage,
          stock,
          updateStock,
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="shop"
          element={
            <Shop
              {...{
                searchResult,
                setASearchResult,
                isLoading,
                apiErrorStatus,
                timeLoading,
                setAProductToShow,
                onAddToCart,
                onSelectedItem,
                onClearSelectedItem,
                shopingCart,
                setAShopingCart,
                setAProductInitStock,
                setAProductQtySelected,
                stock,
                updateStock,
              }}
            />
          }
        />
        <Route
          path="product"
          element={
            <Product
              {...{
                productInitStock,
                setAProductInitStock,
                productToShow,
                productQtySelected,
                setAProductQtySelected,
                searchResult,
                setASearchResult,
                onSelectedItem,
                shopingCart,
                setAShopingCart,
                onAddToCart,
                stock,
                updateStock,
              }}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cart
              {...{
                setAPhraseSearch,
                searchResult,
                setASearchResult,
                stock,
                updateStock,
                setATimeLoading,
                setAProductToShow,
                setAProductInitStock,
                setAProductQtySelected,
                shopingCart,
                setAShopingCart,
                totalShopping,
                onDeleteFromCart,
                onIncrementItemOnCart,
                onDecrementItemOnCart,
                setAUpperLimitItemInStock,
                setALowerLimitItemInStock,
                setAIdItemToRemoveFromCart,
                setAnApiErrorStatus,
                setAnApiErrorMessage,
                onEmptyCart,
              }}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
