import React from 'react';
import EachOrder from "./EachOrder";

function TablesOrders({data, filter, SearchQuery, setOrderedItems, setIsOpen, fetchData}) {
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 mt-4">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Costumer Name</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Number of Items</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Phone Number</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Address</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Update</th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                {data.filter((e)=>{
                    if(filter === "all") return true
                    return e.status === filter
                }).filter((e)=>{
                    if(SearchQuery === "") return true
                    return e.user.name.toLowerCase().includes(SearchQuery.toLowerCase())
                }).map((e)=>{
                    return <EachOrder
                        id={e._id}
                        name={e.user.name}
                        status={e.status}
                        date={e.createdAt}
                        quantity={e.orderItems.length}
                        address={e.address}
                        phone={e.phone}
                        orders={e.orderItems}
                        setOrderedItems={setOrderedItems}
                        key={e._id}
                        setIsOpen={setIsOpen}
                        fetchData={fetchData}
                    />
                })}
                </tbody>
            </table>
        </div>
    );
}

export default TablesOrders;
