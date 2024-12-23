import { useEffect, useState } from "react"
import useAuth from "./useAuth"
import axios from "axios"

const useUserData = () => {
    const { user, loading } = useAuth()
    const [userData, setUserData] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://mobile-shop-server-orpin-one.vercel.app/user/user/${user.email}`)
            setUserData(res.data)
        }
        if (user?.email && !loading) {
            fetchData()
        }
    }, [user, loading])
    return userData
}

export default useUserData


https://mobile-shop-server-orpin-one.vercel.app/user