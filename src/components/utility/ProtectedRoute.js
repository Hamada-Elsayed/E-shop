import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ auth, children }) => {

    if (auth === false) {
        return <Navigate to="/E-commerce" replace />
    }

    return children ? children : <Outlet />
}

export default ProtectedRoute