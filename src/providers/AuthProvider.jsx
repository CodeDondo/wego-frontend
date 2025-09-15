import { createContext, useContext, useEffect, useState } from "react"

export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {
    const [ loginData, setLoginData] = useState(null)

    useEffect(() => {
        try {
            const data = sessionStorage.getItem("access_token")
            if (data){
                setLoginData(JSON.parse(data))
            }

        } catch (error) {
            console.error('Kunne ikke hente access token fra session storage', error)
            setLoginData(null)
        }
    }, [children]) 

  return (
    <AuthContext.Provider value={{ loginData, setLoginData }}>
        {children}
    </AuthContext.Provider>
  )
}

/** Dette er et custom hook */
export const useAuth = () => useContext(AuthContext);