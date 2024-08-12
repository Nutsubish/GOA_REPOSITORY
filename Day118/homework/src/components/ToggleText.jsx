import { useState } from "react"


const ToggleText = () =>{

    const [text,setText] = useState('Hello')
    
    return(
       <>
            <p>{text}</p>
            <button onClick={() => setText('Bye')}>Click Me!</button>
       </> 
    )
}

export default ToggleText