import React, { createContext, useState } from "react";

const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [backgroundColor, setBackgroundColor] = useState("white");

    const toggleBackgroundColor = () => {
        setBackgroundColor((prev) => (prev === "black" ? "white" : "black"));
    };

    return (
        <dataContext.Provider value={{ backgroundColor, toggleBackgroundColor }}>
            {children}
        </dataContext.Provider>
    );
};

export { dataContext, DataProvider };
