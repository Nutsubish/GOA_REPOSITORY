import { useState } from "react"



const BackGround = () =>{
    const [color,setColor] = useState('black')

    const StyleDiv = {"color" : color}

    return(
        <>
            <div style={StyleDiv} onClick={() => setColor("yellow")}>Click Me</div>
        </>
    )
}

export default BackGround
