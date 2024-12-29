import { useContext, useState } from "react";
import { dataContext } from "../context/dataContext";

const Switcher = () => {
    const { acc } = useContext(dataContext);
    const c1 = acc.color1;
    const c2 = acc.color2;
    const [color, setColor] = useState(c1);
    const handleClick = () => {
        setColor((prevColor) => (prevColor === c1 ? c2 : c1));
    };
    return (
        <>
            <button onClick={handleClick}>Click Me!</button>
            <p style={{ color: color }}>TEXT</p>
        </>
    );
};

export default Switcher;
