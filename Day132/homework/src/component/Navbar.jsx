import { Link } from "react-router-dom";

const Navbar = () => {
     
    return(
        <div>
            <nav>
                <ul>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                </ul>
            </nav>
        </div>
    )

};

export default Navbar;