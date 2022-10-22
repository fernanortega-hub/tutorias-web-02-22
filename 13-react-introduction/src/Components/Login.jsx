import React from "react";

const Login = () => {

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
        .then(res => res.json())
        .then(data => console.log(data))
        
    }

    return(
        <section className="h-screen p-4">
            <h2 className="text-xl font-bold mb-4"> Inicio de sesión </h2>
            <form className="flex flex-col space-y-3" onSubmit={submitHandler}> 
                <input type="email" name="email" placeholder="Ingresa tu email" className="h-14 border-2 border-green-500 rounded-lg pl-2"/>
                
                <input type="password" name="password" placeholder="Ingresa tu contraseña" className="h-14 border-2 border-green-500 rounded-lg pl-2"/>

                <button type="submit" className="bg-green-600 p-3 rounded-full text-base font-medium text-white"> Iniciar sesión </button>
            </form>
        </section>
    );
}

export default Login