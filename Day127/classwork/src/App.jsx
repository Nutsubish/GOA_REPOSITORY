import { useEffect, useState } from "react";

function App() {
  const [info, setInfo] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formInfo = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      gmail: e.target.gmail.value,
    };

    setInfo((prevInfo) => [...prevInfo, formInfo]);
  };

  return (
    <div class="bg-black">
      <form onSubmit={submitHandler} class=" flex justify-center">
        <input type="text" placeholder="name:" name="name" /> <br/>
        <input type="text" placeholder="surname:" name="surname" /> <br/>
        <input type="email" placeholder="gmail:" name="gmail"/> <br/>
        <button type="submit" class=" bg-green-500 border-2 rounded border-red-500 duration-150 hover:text-2xl">submit</button>
      </form>
      <h1 class="text-red-400">Info:</h1>
      <div class=" bg-black justify-center text-red-500">
        {info.map((i, index) => (
          <div key={index} class>
            <p>Name: {i.name}</p>
            <p>Surname: {i.surname}</p>
            <p>Email: {i.gmail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

