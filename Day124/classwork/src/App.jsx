import { useEffect, useState } from "react"
import './App.css'
const apiUrl = 'https://newsdata.io/api/1/latest?apikey=pub_6072062d492b069af8a0d030f6d003bc3f550'

const App = () =>  {
  const [newsData, setNewsData] = useState([]);

  useEffect( () => {
    const fetchdData = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      setNewsData(data.results)
    }
    fetchdData();
    }, []);

    console.log(newsData)
   
    
  return (
    <main>
      <h1>News</h1>
      {
        newsData?.map((item,index) => {
          return (
            <article key={index}>
              <h2>{item.title}</h2>
              <img src={item.image_url} alt="img" id="photos" />
              <p>{item.country}</p>
              <a href={item.source_url}>Links</a>
              <p>{item.content}</p>

            </article>
          )
        })
      }
    </main>
  )
}

export default App
