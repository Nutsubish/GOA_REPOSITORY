import React, { useContext } from "react";
import { dataContext } from "../context/DataContext";

const Switcher = () => {
    const { toggleBackgroundColor } = useContext(dataContext);

    return (
        <div>
            <button onClick={toggleBackgroundColor}>
                Switch Background
            </button>
        </div>
    );
};

export default Switcher;
