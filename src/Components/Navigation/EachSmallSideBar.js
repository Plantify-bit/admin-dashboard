import React from 'react';

function EachSidebarSmall({name, icon, link, active, onClick}) {
    return (
        <li onClick={onClick}>
            <button
                className={`group w-full relative flex justify-center rounded px-2 py-3 text-grey-500 hover:bg-gray-50 ${active ? "bg-primary text-white" : ""} transition-colors`}
            >

                {icon}

                <span
                    className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-grey-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                    {name}
                </span>
            </button>
        </li>
    );
}

export default EachSidebarSmall;
