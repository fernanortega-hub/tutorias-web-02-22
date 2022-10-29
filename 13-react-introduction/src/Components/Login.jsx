import React, { useId } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from './Context'
import InputGroup from "./Inputs/InputGroup";
import NormalLayout from "./Layouts/NormalLayout";
import Title from "./Title";

const Login = () => {
    const navigate = useNavigate()
    const { Login, isAuth } = useAuth()

    const SubmitHandler = async (ev) => {
        ev.preventDefault()

        const formData = new FormData(ev.target);
        const formBody = Object.fromEntries(formData.entries())

        await Login(formBody)

        if (isAuth.status) {
            console.log('Hola');
            navigate('/users')
        }
    }

    return (
        <NormalLayout>
            <form className="space-y-4" onSubmit={SubmitHandler}>
                <Title> Inicio de sesión </Title>
                <InputGroup label={'Ingresa tu correo'} placeholder={'example@gmail.com'} name={'email'} type={'email'} required={true} id={useId()} />
                <InputGroup label={'Ingresa tu contraseña'} placeholder={'Contraseña'} name={'password'} type={'password'} required={true} id={useId()} />
                <button type="submit" className="bg-green-600 p-3 rounded-full text-base font-medium text-white w-full"> Iniciar sesión </button>
            </form>
        </NormalLayout>
    );
}

export default Login