import { configure } from "@testing-library/react";
import React, { useState, useContext, createContext } from "react";
import { Navigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useStorage from "../hooks/useStorage";


const AuthContext = createContext();

export const useAuth = () => {
    const auth = useContext(AuthContext)

    if (auth === undefined) throw Error('useAuth debe usarse en un AuthProvider')

    return auth;
}

const initialState = {
    status: false,
    user: null
}

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(JSON.parse(useStorage.get('user')) || initialState);

    const Login = async (body) => {
        const data = await useFetch({ url: '/login', method: 'POST', body: body })
        
        // Si data.token es undefined, null, 0, '', false
        if (data.token) {
            setIsAuth({
                status: true,
                user: data.token
            })
            useStorage.set('user', JSON.stringify({
                status: true,
                user: data.token
            }))
        } else {
            console.log('Acá entra si no existe');
            setIsAuth(initialState)
        }
    }

    const Logout = () => {
        useStorage.remove('user');
        setIsAuth(initialState);
        return <Navigate to='/login'/>
    }

    console.group('isAuth');
    console.log(`Estado del isAuth:`);
    console.log(isAuth);
    console.groupEnd()

    return (
        <AuthContext.Provider value={{ isAuth, Login, Logout }}>
            { children }
        </AuthContext.Provider>
    )
}