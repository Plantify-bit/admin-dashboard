import React from 'react';
import EachPostTable from "./EachPostTable";

function PostTable({fetchData, setOpen, setEditData, data}) {
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 mt-4">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Image</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Title</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Created At</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Option</th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                {data.map((e)=>{
                    return <EachPostTable title={e.title} id={e._id} description={e.description} image={e.image.url} createdAt={e.createdAt} fetchData={fetchData} setOpen={setOpen} setEditData={setEditData}/>
                })}
                </tbody>
            </table>
        </div>
    );
}

export default PostTable;
