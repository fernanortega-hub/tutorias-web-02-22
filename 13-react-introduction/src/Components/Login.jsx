import React from "react";
import useStorage from "../hooks/useStorage";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    const submitHandler = async (ev) => {
        ev.preventDefault()

        const formData = new FormData(ev.target);
        const formBody = Object.fromEntries(formData.entries())

        await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formBody)
        })
            .then(res => {
                if(res.ok) return res.json()

                throw new Error(`${res.statusText}, ${res.status}`)
            })
            .then(data => {
                useStorage.set('token', data.token)
                navigate('/users')
            })
            .catch(err => alert(err))
    }

    return (
        <section className="h-screen p-4">
            <h2 className="text-xl font-bold mb-4"> Inicio de sesión </h2>
            <form className="flex flex-col space-y-4" onSubmit={submitHandler}>
                <input type="email" name="email" placeholder="Ingresa tu email" className="h-14 border-2 border-green-500 rounded-lg pl-2" />

                <input type="password" name="password" placeholder="Ingresa tu contraseña" className="h-14 border-2 border-green-500 rounded-lg pl-2" />

                <button type="submit" className="bg-green-600 p-3 rounded-full text-base font-medium text-white"> Iniciar sesión </button>
            </form>
        </section>
    );
}

export default Login