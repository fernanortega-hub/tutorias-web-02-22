import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState(null);
    const [page, setPage] = useState(1)

    const getUsers = async () => {
        const response = await fetch(`https://reqres.in/api/users?page=${page}`)
        let data = {}

        if (response.ok) {
            data = await response.json()
            setUsers(data)
            // console.log(users);
        }

        if(!response) {
            alert(response.status())
        }
    }

    useEffect(() => {
        getUsers()
    }, [page]);

    
    return (
        <section className="bg-red-50 h-screen p-4 md:bg-blue-100 md:p-8 space-y-4">
            <h1 className="text-2xl font-bold hover:bg-red-300 hover:p-2 hover:text-white md:hover:bg-blue-300"> Usuarios </h1>
            { 
                users && users.data.map((user) => 
                    <User key={user.id} struct={user} />
                )
            }
        </section>
    );
}

export default Users