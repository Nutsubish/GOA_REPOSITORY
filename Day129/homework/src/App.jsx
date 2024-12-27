import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Default from "./pages/DefaultPage.jsx"
function App() {


  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Default/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
