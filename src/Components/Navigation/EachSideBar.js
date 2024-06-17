import React from 'react';

function EachSideBar({name, icon, link, active, onClick}) {
    return (
        <li>
            <button
                onClick={onClick}
                className={`flex items-center gap-2 text-left rounded px-2 py-2 text-sm font-medium text-grey-700 ${active ? "bg-blue-600 text-white" : ""} w-full transition-colors`}
            >
                <span>{icon}</span> {name}
            </button>
        </li>
    );
}

export default EachSideBar;
