import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Context";

const ProtectedRoute = ({ children }) => {
    const { isAuth } = useAuth();

    if (!isAuth.status) return <Navigate to='/'/>

    return children;
}

export default ProtectedRoute;