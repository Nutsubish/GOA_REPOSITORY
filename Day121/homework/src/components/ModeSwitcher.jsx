import { useState, useEffect } from "react";

const Mode = () => {

    const [theme, setTheme] = useState('white');


    const handleClick = () => {
        setTheme(prevTheme => (prevTheme == 'white' ? 'black' : 'white'));
    };

    
    useEffect(() => {
        document.body.style.backgroundColor = theme;
    }, [theme]);

    return (
        <button onClick={handleClick}>
            Switch Mode
        </button>
    );
};

export default Mode;
