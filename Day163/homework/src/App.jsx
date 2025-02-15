import { useState } from "react";
import { useCustom } from "./hooks/useCustom";
import { useProduct } from "./hooks/useProduct";
import AuthForm from "./components/AuthForm";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";

export default function App() {
  const { user, register, login, logout } = useCustom();
  const { products, addProduct, deleteProduct } = useProduct();
  const [error, setError] = useState("");

  const handleAuth = (email, password, isRegister) => {
    if (isRegister) {
      register(email, password);
    } else {
      if (!login(email, password)) {
        setError("User is not founding");
        return;
      }
    }
    setError("");
  };

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.email}</h1>
          <button onClick={logout}>Logout</button>
          <h2>Product Management</h2>
          <ProductForm onAdd={addProduct} />
          <ProductTable products={products} onDelete={deleteProduct} />
        </>
      ) : (
        <>
          <AuthForm onAuth={handleAuth} />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </>
      )}
    </div>
  );
}
