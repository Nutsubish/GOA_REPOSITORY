import { useContext } from "react";
import { dataContext } from "../context/dataContext";
 

const Home = () => {

    const {acc} = useContext(dataContext)

    const name = acc.firstname
    console.log(name)

    return ( 
        <h1>Hello {name}</h1>
        
     );
}

export default Home;