import React from "react"
import { createContext } from "react"

const dataContext = React.createContext()

const DataProvider = ({children}) => {

    const acc = {
        firstname : 'john',
        lastname : 'doe',
        email : 'johndoe@example.com',
        age : 16,
        help : 'No',
        color1: 'white',
        color2: 'black',
    }

    return(
        <dataContext.Provider value={{acc}}>
            {children}
        </dataContext.Provider>
    )
}

export {dataContext,DataProvider}