import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar.jsx"
import Weather from "./pages/Weather.jsx"

function App() {





  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/weather" element={<Weather/>}></Route>
      </Routes>     
    </>
  )
}

export default App
