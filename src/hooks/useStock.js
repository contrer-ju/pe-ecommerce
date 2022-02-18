import { useState } from "react";
import initStock from "../constants/initStock.json";

const useStock = () => {
  const [stock, setStock] = useState(initStock);

  const updateStock = (value) => setStock(value);

  return {
    stock,
    updateStock,
  };
};

export default useStock;
