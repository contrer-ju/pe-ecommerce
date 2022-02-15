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
import useGetData from "./hooks/useGetData";
import usePhraseSearch from "./hooks/usePhraseSearch";
import useProductPage from "./hooks/useProductPage";
import useShopingCart from "./hooks/useShopingCart";
import "./Styles.css";

function App() {
  const {
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
  } = useShopingCart();

  useEffect(() => {
    if (shopingCart.length === 0) setIfShopingCartEmpty(true);
    else setIfShopingCartEmpty(false);
  }, [setIfShopingCartEmpty, shopingCart.length]);

  useEffect(() => {
    onCalculateTotalShopping(shopingCart, setATotalShopping);
  }, [shopingCart, setATotalShopping]);

  useEffect(() => {
    if (isUpperLimitItemInStock) {
      onOffTooltips(shopingCart, setAShopingCart);
      setAUpperLimitItemInStock(false);
    }
  }, [
    isUpperLimitItemInStock,
    shopingCart,
    setAShopingCart,
    setAUpperLimitItemInStock,
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
                timeLoading,
                setAProductToShow,
                onAddToCart,
                onSelectedItem,
                onClearSelectedItem,
                shopingCart,
                setAShopingCart,
                setAProductInitStock,
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
