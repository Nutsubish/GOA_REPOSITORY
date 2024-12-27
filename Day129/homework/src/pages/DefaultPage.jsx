import { useState } from "react"


const Default = () =>{
    const [UserInput,SetUserInput] = useState('');
    const HandleUserInput = (e) =>{
        SetUserInput(e.target.value)
    }
    return(
        <>
            <form action="">
                <h1>Hello Your At Starting Page</h1>
                <p>Please Enter Your Name</p>
                <input type="text" value={UserInput} onChange={HandleUserInput}/>
                <p>Your Name: {UserInput} </p>
            </form>
        </>
    )

}

export default Default