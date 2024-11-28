import { useState,useEffect } from "react";


const Effects = () =>{

    const [count,setCount] = useState(0);

    const handleClick = () =>{
        setCount((prevCount) => prevCount+1);
    };

    useEffect(()=>{
        console.log("count Changed")
    },count)

    return(
        <>
            <p>You Click {count} times</p>
            <button onClick={handleClick}>Click Me!</button>
        </>
    )

}

export default Effects