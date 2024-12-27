import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Help from "./pages/Help.jsx"
import Team from "./pages/Team.jsx"
import Contact from "./pages/Contact.jsx"

const App= ()=> {
  
  return (
    <>
      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
          <li><Link to={'/team'}>Team</Link></li>
          <li><Link to={'/help'}>Help</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
