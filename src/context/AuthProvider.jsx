import { createContext, useState } from "react"
import { login } from "../api/login"

export const useAuth = createContext()

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)
  const [userAutenticado, setUserAutenticado] = useState(false)

    const loginAdmin = async(values) => {
      try {
        const userData = await login(values)
        setUser(userData)
        setUserAutenticado(true)
      
      } catch (error) {
        console.log(error.response.data)
      }
      
    }

  return (
    <useAuth.Provider value={{
        loginAdmin, 
        userAutenticado}
      }>
      {children}
    </useAuth.Provider>
  )
}
