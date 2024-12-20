import React from 'react'
import Loading from '../../pages/Loading'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return <Loading />
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
}

export default PrivateRoutes