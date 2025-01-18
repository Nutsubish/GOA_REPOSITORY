


const UseStateExample = () =>{
    const [addClick,setAddClick] = useState(0)


    return(
        <>
            <button onClick={(prev)=> setAddClick(prev+1)}>{addClick}</button>
        </>
    )

}