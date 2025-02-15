import { useState } from "react";

export default function AuthForm({ onAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuth(email, password, isRegister);
  };
  const handleChange = (e) =>{
    setEmail(e.target.value)
  } 
  const handleChange2 = (e) =>{
    setPassword(e.target.value)
  }

  return (
    <div>
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={handleChange}/>
        <input type="password" placeholder="Password" value={password} onChange={handleChange2}/>
        <button type="submit">{isRegister ? "Register" : "Login"}</button>
      </form>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Switch to Login" : "Switch to Register"}
      </button>
    </div>
  );
}
