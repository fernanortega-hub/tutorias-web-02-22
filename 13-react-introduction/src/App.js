import React from "react";
import { Link, NavLink } from "react-router-dom";

function App() {
    return (
        <div className="bg-green-50 h-screen flex flex-col items-center justify-center p-4 space-y-4">
            <h1> Bienvenidos a las tutorias </h1>
            <Link to="/login" className='bg-green-600 border-0 p-3 rounded-full w-full text-center text-white' > Ir al login </Link>
            <NavLink to='/register' className='bg-green-600 border-0 p-3 rounded-full w-full text-center text-white' > Ir al registro </NavLink>
        </div>
    );
}

export default App;
