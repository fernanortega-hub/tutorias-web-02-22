import React from "react";
import { NavLink } from "react-router-dom";

const Custom404 = () => (
    <div className="h-screen bg-green-900 text-white flex flex-col space-y-10 p-4 justify-center items-center">
        <h1 className="text-3xl"> Upss... la página que quieres visitar no existe o no está disponible </h1>
        <span className="material-symbols-rounded text-4xl">
            sentiment_dissatisfied
        </span>
        <NavLink to='/' className='bg-green-600 font-medium text-center rounded-full p-4'> Regresar a la pagina principal </NavLink>
    </div>
)

export default Custom404