

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from './../firebase/firebase.config';
import axios from "axios";

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('auth state change')
            setUser(currentUser)
            // console.log(currentUser)
            if (currentUser) {
                axios.post('http://localhost:4000/jwt', { email: currentUser.email }).then((data) => {
                    if (data.data) {
                        localStorage.setItem("access-token", data?.data?.token)
                        setLoading(false)
                    }
                })

            }
            else {
                localStorage.removeItem("access-token")
                setLoading(false)
            }

        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user, createUser, signInUser, logOut, googleLogin, loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}