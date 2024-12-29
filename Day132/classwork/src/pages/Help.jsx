import { useContext } from "react";
import { dataContext } from "../context/dataContext";

const Help = () => {
    const {acc} = useContext(dataContext)
    const name = acc.firstname
    const mail = acc.email
    return (  
        
        <div>
            <h1>Hello,{name}</h1>
            <p>We Sent You An Email on: {mail}, if you needed a help</p>
        </div>

    );
}

export default Help;