import { Link } from "react-router-dom";



function Navbar() {
    return ( 
        <header>
            <h1>Navbar</h1>
                <Link to={"/"}>Home</Link>
                <Link to={"/weather"}>Weather</Link>
        </header>
     );
}

export default Navbar;