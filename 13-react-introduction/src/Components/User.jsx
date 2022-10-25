import React from "react";
import { NavLink } from "react-router-dom";

const User = ({ struct }) => {
    const { avatar, email, first_name, last_name, id } = struct

    return (
        <div className="bg-yellow-200 p-2 rounded-xl border-2 border-gray-500">
            <img src={avatar} alt={`Imagen de ${first_name}`} />
            <span> Hi my name is {first_name} {last_name} </span>
            <p> My email is {email} </p>
            <NavLink className={` ${!'active' ? 'bg-red-500' : 'bg-green-400'}`} to={id}> Ver más de {first_name} </NavLink>
        </div>
    )
}

export default User;