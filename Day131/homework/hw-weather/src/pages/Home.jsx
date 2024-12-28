
import { useEffect, useState } from "react"

const ApiKey = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/georgia?unitGroup=metric&key=KNNLMJWZYN9PR8XNYRGVJ6ZSX&contentType=json'



function Home() {
  const [data,setData] = useState(null);
  const [userInput,setUserInput] = useState('');
  const [output,setOutput] = useState('');
  const information = async() =>{
    const respones = await fetch(ApiKey)
    const jsonres = await respones.json()
    const info = jsonres.days
    for (let i = 0; i < info.length; i++) {
      const element = info[i];
      setData(element.temp)
    }
    const country = jsonres.address
    if(country == userInput){
      setOutput(data)
    }else{
      setOutput('No Country Found')
    }
  }
  useEffect(()=>{
    information()
  },[])



  return (
    <>
      <input type="text" value={userInput} />
      <p>{output}</p>
    </>
  )
}

export default Home;
