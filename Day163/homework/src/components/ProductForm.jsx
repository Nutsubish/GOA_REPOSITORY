import { useState } from "react";

export default function ProductForm({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price) {
      onAdd({ name, price });
      setName("");
      setPrice("");
    }
  };
  const handleChange = (e) => {
    setName(e.target.value)
  }
  const handlePriceChange = (e) =>{
    setPrice(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" value={name} onChange={handleChange}/>
      <input type="number" placeholder="Price" value={price} onChange={handlePriceChange}/>
      <button type="submit">Add Product</button>
    </form>
  );
}
