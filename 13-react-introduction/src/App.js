import React from "react";
import { Link, NavLink } from "react-router-dom";
import NormalLayout from "./Components/Layouts/NormalLayout";
import Title from "./Components/Title";

function App() {
    return (
        <NormalLayout className='space-y-3'>
            <Title> Bienvenidos a las tutorias de web </Title>
            <Link to="/login" className='bg-green-600 border-0 p-3 rounded-full w-full text-center text-white' > Ir al login </Link>
            <NavLink to='/register' className='bg-green-600 border-0 p-3 rounded-full w-full text-center text-white' > Ir al registro </NavLink>
        </NormalLayout>
    );
}

export default App;
