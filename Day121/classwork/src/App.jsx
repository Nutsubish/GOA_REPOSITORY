import { useEffect, useState } from "react"
import Effects from "./components/Effect.jsx";
function App() {

  const [acc,setAcc] = useState({
    email : 'example@gmail.com',
    lastname: 'nutsubidze',
    firstname: 'nika',
  })

  const handleSubmit = (e) =>{
      e.preventDefault();
      
      const formData = {
        email : e.target.email.value,
        lastname : e.target.lastname.value,
        firstname : e.target.firstname.value,
      }

      setAcc((prev) => ({...prev,...formData}))
  }

  return (
    <>
      <p>Email : {acc.email}</p>
      <p>LastName : {acc.lastname}</p>
      <p>Name : {acc.firstname}</p>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="mail"/>
        <input type="text" name="lastname" placeholder="lastname"/>
        <input type="text" name="firstname" placeholder="name"/>
        <button>Submit</button>
      </form>
      <Effects/>
    </>
  )
}

export default App
