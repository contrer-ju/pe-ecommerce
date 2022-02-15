import { useState } from "react";

const useProductPage = () => {
  const [productToShow, setProductToShow] = useState({});
  const [productInitStock, setProductInitStock] = useState(0);
  const [productQtySelected, setProductQtySelected] = useState(0);

  const setAProductToShow = (value) => setProductToShow(value);
  const setAProductInitStock = (value) => setProductInitStock(value);
  const setAProductQtySelected = (value) => setProductQtySelected(value);

  return {
    productToShow,
    setAProductToShow,
    productInitStock,
    setAProductInitStock,
    productQtySelected,
    setAProductQtySelected,
  };
};

export default useProductPage;
