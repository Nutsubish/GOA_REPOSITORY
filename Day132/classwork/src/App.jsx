import { Link, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import Help from "./pages/Help"
import Switcher from "./pages/Switcher"
import Contact from "./pages/Contact"

const App = () =>{
  return(
    <div>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'about'}>About</Link></li>
        <li><Link to={'profile'}>Profile</Link></li>
        <li><Link to={'help'}>Help</Link></li>
        <li><Link to={'contact'}>Contact</Link></li>
        <li><Link to={'switcher'}>Switcher</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/switcher" element={<Switcher/>}/>
      </Routes>
    </div>
  )
}
export default App