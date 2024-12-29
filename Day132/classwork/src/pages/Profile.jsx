import { useContext, useEffect, useState } from "react";
import { dataContext } from "../context/dataContext";

const Profile = () => {
    const [helped, setHelped] = useState('');
    const { acc } = useContext(dataContext);

    useEffect(() => {
        if (acc.help === 'No') {
            setHelped('Your Profile is Good');
        } else {
            setHelped('Man, get some help');
        }
    }, [acc.help]);

    return (
        <div>
            <h1>Profile</h1>
            <p>About Your Profile: {helped}</p>
        </div>
    );
}

export default Profile;
