import { useContext } from "react";
import { dataContext } from "../context/dataContext.jsx";

const About = () => {
    const { acc } = useContext(dataContext);

    const infos = ["firstname", "lastname", "email", "age", "help"];

    return (
        <div>
            <h1>About You</h1>
            {infos.map((info, index) => (
                <p key={index}>{acc[info]}</p>
            ))}
        </div>
    );
}

export default About;
