import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const App = () => {
  const { isLoggedIn, user, login, logout } = useContext(UserContext);

  let content;

  if (isLoggedIn) {
    content = (
      <div>
        <h1>Welcome, {user.name}!</h1>
        <p>Email: {user.email}</p>
        <button onClick={logout} >
          Logout
        </button>
      </div>
    );
  } 
  else {
    content = (
      <div>
        <h1>Welcome, Guest!</h1>
        <p>Please log in to access your account.</p>
        <button onClick={login} >
          Login
        </button>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default App;
