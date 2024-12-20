import React from 'react'
import Loading from '../../pages/Loading'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useUserData from '../../hooks/useUserData'

const SellerRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const userData = useUserData()
    const location = useLocation()
    if (loading || !userData?.role) {
        return <Loading />
    }
    if (user && userData?.role === 'seller') {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
}

export default SellerRoute