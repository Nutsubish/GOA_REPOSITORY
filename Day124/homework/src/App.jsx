import { useEffect, useState } from "react"

const apiUrl = 'https://newsdata.io/api/1/latest?apikey=pub_6072062d492b069af8a0d030f6d003bc3f550'
// Es kodi metviton davwere im saitze ver vipove api key generator romlitac json-s damibrunebda da miwerda rom tqven cdilobto json-is nivtebis wamogebaso mara api-shio html ariso


const App = ()=> {

  const [cartdata,setcartData] = useState([]);

  useEffect(()=>{

    const data = async () =>{

      const res = await fetch(apiUrl);
      const respone = await res.json();
      setcartData(respone.results)
  }
data();
  },[])
  console.log(cartdata)


  return (
    <>
      {
        cartdata?.map((i, index) => {
          return(
            <div key={index}>
              <h1>{i.title}</h1>
              <p>{i.country}</p>
              <p>{i.ai_org}</p>
              <img src={i.img_url} alt="" />
              <img src = {i.source_url}/>
           </div>
          )
        })
      }
    </>
  )
}

export default App
