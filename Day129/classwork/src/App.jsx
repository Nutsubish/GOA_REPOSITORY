import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About";


const App = () =>{


    return(
        <> 
            <Navbar/>
            <Routes>
                
                <Route path="/Home" element={<Home/>}/>
                <Route path="/About" element= {<About/>}/>
            </Routes>
        </>
    )
}

export default App;