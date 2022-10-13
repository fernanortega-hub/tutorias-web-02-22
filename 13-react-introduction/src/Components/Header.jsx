import React, { useState, useEffect, useRef } from "react";



const Header = () => {
    const [counter, setCounter] = useState(0);
    const title = useRef("")

    function addCounter() {
        setCounter(counter + 1);
        title.current.textContent = counter
    }

    return (
        <header>
            <h1 ref={title} className="text-3xl"> Desde componente Header </h1>
            <button onClick={addCounter} id="btn-click" className="px-12 py-3 rounded-full bg-teal-600 text-white mt-6 w-full">
                Click me
            </button>
            <p className="text-2xl mt-9"> Estado del counter: {counter}</p>
        </header>
    );
}

export default Header;
