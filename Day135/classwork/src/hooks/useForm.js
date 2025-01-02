import { useState } from "react"


const useForm = () => {
    const [formData,setFormData] = useState({});

    
    const handleChange = (e) => {
        e.preventDefault();
        const { name , value } = e.target;
        setFormData({...formData, [name] : value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return {formData, handleChange , handleSubmit}
}

export default useForm