import React, { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [backgroundColor, setBackgroundColor] = useState("white");

    const handleChange = () => {
        if(backgroundColor == 'white'){
            setBackgroundColor('black')
        }
        else{
            setBackgroundColor('white')
        }
    };

    return (
        <DataContext.Provider value={{ backgroundColor, handleChange }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
