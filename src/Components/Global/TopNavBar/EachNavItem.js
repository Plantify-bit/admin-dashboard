import React from 'react';

function EachNavItem({icon, text, active, SetActive, index}) {
    return (
        <div onClick={()=>SetActive(index)}
             style={{
                 color:(active === index) ? "rgb(54,94,222)" : "gray",
                 borderBottom:(active === index) ? "2px solid rgb(54,94,222)" : "2px solid transparent",
             }}
            className={`inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-md font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer`}
        >
            {icon}
            {text}
        </div>
    );
}

export default EachNavItem;
