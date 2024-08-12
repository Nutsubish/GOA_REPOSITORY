import { useState } from "react"



const TodoList = () => {

    const [input,setInput] = useState('')

    const TodoItems = []

    const handleChange = (e) =>{
        setInput(e.target.value)
        e.preventDefault()
    }

    return (
        <>

            <form action="">
                <input 
                type="text"
                onChange={handleChange}
                 />
            </form>
        </>
    )
}

export default TodoList