
import { useEffect, useState } from 'react'
import './App.css'

const apiURL = 'https://api.thecatapi.com/v1/images/0XYvRd7oD'

function App() {
  const [data,setData] = useState([]);

  const info = async ()=> {
    const res = await fetch(apiURL)
    const datainfo = await res.json();
    setData(datainfo) 
  }
  

  useEffect(()=>{
    info()
  },[])


  return (
    <>
        <div> 
            <h1>Cat Image</h1> 
            <img src={data.url} alt="Cute cat" /> 
        </div> 
    </>
  )
}

export default App
