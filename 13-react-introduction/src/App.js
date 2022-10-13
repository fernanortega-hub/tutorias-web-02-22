import Header from "./Components/Header";
import { useState } from 'react';

function App() {
    
    const [counter, setCounter] = useState(0);

    function addCounter() {
        setCounter(counter + 1);
    }
    return (
        <div className="bg-blue-900 h-screen text-white flex flex-col items-center justify-center md:bg-orange-400">
            <Header/>
            <h2 className="bg-red-500"> App </h2>
            <button onClick={addCounter} id="btn-click" className="px-12 py-3 rounded-full bg-teal-600 text-white mt-6 w-full">
                Click me
            </button>
            <p className="text-2xl mt-9"> Estado del counter: {counter}</p>
        </div>
    );
}

export default App;
