import React from 'react';

function InputStyle({heading, hint, onChange, type="text", value=''}) {
    return (
        <div className="relative flex-1">
            <p> {heading} </p>
            <input
                value={value}
                onChange={(e)=>{
                    onChange(e.target.value)
                }}
                type={type}
                id="Search"
                name={"Search"}
                placeholder={hint}
                className="w-full rounded-md bg-gray-100 py-2.5 pe-10 shadow-sm sm:text-sm p-4"
            />
        </div>
    );
}

export default InputStyle;
