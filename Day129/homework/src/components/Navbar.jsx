import { Link } from "react-router-dom"

const Navbar = () =>{
    const navLinks = ["Home","About","Contact",]

    
    

    return(
        <header>
            <h1>hello</h1>
            <nav>
                    {navLinks.map((path,index)=>{
                        return(
                            <li key={index}>
                                <Link to={`/${path}`}>{path}</Link>
                            </li>
                        )
                    })}
            </nav>
        </header>
    )

}
export default Navbar