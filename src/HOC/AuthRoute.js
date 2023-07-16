import React, { useContext } from "react"
import { useRouter } from "next/router"
import { useAuth } from '../context/AuthContext'

const AuthRoute = ({ children }) => {
  const {logout, currentUser } = useAuth()
  const Router = useRouter()

  if (currentUser) {
    return <>{children}</>
  } else {
    Router.push("/")
    alert('Utilisateur non connecté')
    return <></>
  }
}

export default AuthRoute