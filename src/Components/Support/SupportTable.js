import React from 'react';
import EachSupportTable from "./EachSupportTable";

function SupportTable({data, filterData, setModalData, setOpen, fetchData, SearchValue}) {
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 mt-4">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Title</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Phone Number</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Update</th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                {data.filter((e)=>{
                    if(filterData === "all") return true
                    return e.status === filterData
                }).filter((e)=>{
                    if(SearchValue === "") return true
                    return e.user.name.toLowerCase().includes(SearchValue.toLowerCase())
                }).map((e) => {
                    return <EachSupportTable id={e._id} name={e.user.name} title={e.subject} phone={e.phoneNumber} email={e.user.email} status={e.status} date={e.createdAt} message={e.message} setModalData={setModalData} setOpen={setOpen} fetchData={fetchData}/>
                })}
                </tbody>
            </table>
        </div>
    );
}

export default SupportTable;
