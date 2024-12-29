import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { dataContext, DataProvider } from "./context/DataContext";
import Switcher from "./component/Switcher";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./component/Navbar";

const App = () => {
    const { backgroundColor } = useContext(dataContext);

    useEffect(() => {
        document.body.style.backgroundColor = backgroundColor;
    }, [backgroundColor]);
    
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Switcher />
            
      </>
    );
};

export default App;

