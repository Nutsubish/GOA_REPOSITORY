import { useState, useEffect } from "react";

export function useProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  const addProduct = (product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_,i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return { products, addProduct, deleteProduct };
}
