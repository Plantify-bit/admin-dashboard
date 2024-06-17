import React from 'react';
import {SyncLoader} from "react-spinners";

function NoBackgroundButton({text, onPress, isLoading}) {
    return (
        <button
            onClick={()=>{
                if(!isLoading && onPress){
                    onPress()
                }
            }}
            className="group rounded relative inline-block overflow-hidden border border-blue-700 px-6 py-2 focus:outline-none focus:ring outline-none min-h-[40px]"
        >
                  <span
                      className="absolute rounded inset-y-0 left-0 w-[2px] bg-blue-700 transition-all group-hover:w-full group-active:bg-indigo-500"
                  ></span>

            <span
                className="relative rounded text-sm font-medium text-blue-700 transition-colors group-hover:text-white"
            >
                {
                    isLoading ?
                        <SyncLoader color={"#becdf8"} size={8} loading={true}/>
                        :
                        text
                }
              </span>
        </button>
    );
}

export default NoBackgroundButton;
