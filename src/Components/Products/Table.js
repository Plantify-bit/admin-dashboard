import React from 'react';
import EachTableData from "./EachTableData";

function Table({data, deleteData, setEditData, setOpen}) {
    return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 mt-4">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
            <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Image</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Category</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Discount</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Stock</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Option</th>
            </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
            {data.map((item, index) => {
                return <EachTableData deleteData={deleteData} description={item.description} keywords={item.keywords} setEditData={setEditData} setOpen={setOpen} key={index} name={item.name} category={item.category} price={item.price} discount={item.discount} stock={item.stock} image={item.image.url} id={item._id}/>
            })}
            </tbody>
        </table>
    </div>
    );
}

export default Table;
