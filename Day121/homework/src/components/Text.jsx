import { useState, useEffect } from "react";

const Text = () => {
    const [text, setText] = useState('');
    const [warning, setWarning] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    useEffect(() => {
        if (text.length > 5) {
            setWarning('Hello You Reached Limit');
        } else {
            setWarning(''); 
        }
    }, [text]); 

    return (
        <>
            <input type="text" onChange={handleChange} />
            <p>{warning}</p>
        </>
    );
};

export default Text;
