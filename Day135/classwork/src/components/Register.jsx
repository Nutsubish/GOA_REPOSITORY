import useForm from "../hooks/useForm.js"

const Register = () => {
    const {formData, handleChange , handleSubmit} = useForm();



    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstname" onChange={handleChange} placeholder="name"/>
            <input type="email" name="email" onChange={handleChange} placeholder="email" />
            <input type="password" name="password" onChange={handleChange} placeholder="passwsord"/>
            <button type="submit">Register</button>
        </form> 
    )
}

export default Register;