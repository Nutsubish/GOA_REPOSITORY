import React, { useEffect, useState } from "react";
import './App.css';


function App(){
  const [currentData,setCurrentData] = useState([]);
  const [localStorageData,setLocalStorageData] = useState([]);

  const submitHandler = (e) =>{
    e.preventDefault();

    const InformationTable = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      gmail: e.target.gmail.value,
    }
    setCurrentData(InformationTable)
    for (let i = 0; i < currentData.length; i++) {
      if(currentData[i]==localStorageData[i]){
        alert("there is already account registered")
      }
      else{
        setLocalStorageData(currentData)
      }
      
    }
    
    
      }
  



  return (
        <>
          <form onSubmit={submitHandler} className="flex justify-center">
            <label htmlFor="">Name:</label>
            <input type="text" className=" border-2 border-purple-600 rounded-md"  name="name" />
            <label htmlFor="">Surname:</label>
            <input type="text" className=" border-2 border-purple-600 rounded-md"  name="surname" />
            <label htmlFor="">Gmail:</label>
            <input type="text" className=" border-2 border-purple-600 rounded-md"  name="gmail" />
            <button>Click Me</button>
          </form>

          <div>

          </div>
        </>
  );
}

export default App;
