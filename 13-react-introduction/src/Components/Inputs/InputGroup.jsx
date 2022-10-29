import React from "react";

const InputGroup = ({ placeholder, name, id, minLength, maxLength, required, label, type }) => (
    <div className="flex flex-col space-y-3 group">
        <label htmlFor={id} className="group-hover:text-green-600">
            {label}
        </label>

        <input type={`${type}`}
        placeholder={placeholder}
        name={name} id={id}
        minLength={minLength || 2} maxLength={maxLength || 128}
        required={required ? true : false}
        autoComplete="true"
        className="h-[56px] px-3 border-2 border-green-600 rounded-md
        focus:ring-1 focus:outline-none focus:ring-green-400"
        /> 
    </div>
)

export default InputGroup;