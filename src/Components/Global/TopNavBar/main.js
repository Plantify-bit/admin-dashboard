import React from 'react';
import EachNavItem from "./EachNavItem";

function TopNavBar({active, SetActive, NavItems}) {

    return (
    <div className={"pt-7"}>
        <div className="sm:hidden">
            <label htmlFor="Tab" className="sr-only">Tab</label>

            <select id="Tab" className="w-full rounded-md border-gray-200">
                <option>Manage</option>
                <option>Add</option>
            </select>
        </div>

        <div className="hidden sm:block">
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex gap-6" aria-label="Tabs">
                    {NavItems.map((e,i)=>{
                        return <EachNavItem
                         active={active}
                         SetActive={SetActive}
                         text={e.text}
                         icon={e.icon}
                         index={i}
                        />
                    })}
                </nav>
            </div>
        </div>
    </div>
    );
}

export default TopNavBar;
