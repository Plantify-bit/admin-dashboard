import React, {useState} from 'react';
import NoBackgroundButton from "../../Components/Global/NoBackgroundButton";
import {createProduct} from "../../Api/Product";
import {toast} from "react-toastify";
import {toastsettings} from "../../Configs/toastSettings";

function CreateNewProduct() {
    const [FormData, setFormData] = useState({
        name: "",
        price: "",
        discount: "",
        description: "",
        category: "",
        keywords: "",
        stock: ""
    })
    const [SelectedImage, setSelectedImage] = useState(null)
    const [Loading, setLoading] = useState(false)
    async function AddProduct() {
        setLoading(true)
        try {
            await createProduct({...FormData, image: SelectedImage})
            toast.success("Product Added Successfully", toastsettings)

        } catch (e) {
            toast.error(e.response.data.message, toastsettings)
        }
        setLoading(false)
    }
    return (
    <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </aside>

            <main
                className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
            >
                <div className="max-w-xl lg:max-w-3xl">
                    <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                       Add a New <span className={"text-blue-700"}>Product</span>
                    </h1>

                    <p className="mt-4 leading-relaxed text-gray-500">
                       Fill in the form below to create a new product.
                    </p>

                    <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={async (e) => {
                        e.preventDefault()
                        if (!Loading) {
                            await AddProduct()
                        }
                    }}>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="name"
                                   className="block text-sm font-medium text-gray-700"> Name of Product </label>
                            <input
                                onChange={(e) => {
                                    setFormData({...FormData, name: e.target.value})
                                }}
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 p-4 w-full rounded-md border-gray-200 bg-blue-50 text-sm text-gray-700 shadow-sm"
                                required
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="Stock" className="block text-sm font-medium text-gray-700">
                                Stock
                            </label>

                            <input
                                onChange={(e) => {
                                    setFormData({...FormData, stock: e.target.value})
                                }}
                                type="number"
                                id="Stock"
                                name="Stock"
                                className="mt-1 p-4 w-full rounded-md border-gray-200 bg-blue-50 text-sm text-gray-700 shadow-sm"
                                required
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                Price
                            </label>

                            <input
                                onChange={(e) => {
                                    setFormData({...FormData, price: e.target.value})
                                }}
                                type="number"
                                id="FirstName"
                                name="first_name"
                                className="mt-1 p-4 w-full rounded-md border-gray-200 bg-blue-50 text-sm text-gray-700 shadow-sm"
                                required
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                                Discount
                            </label>

                            <input
                                onChange={(e) => {
                                    setFormData({...FormData, discount: e.target.value})
                                }}
                                type="number"
                                id="LastName"
                                name="last_name"
                                className="mt-1 p-4 w-full rounded-md border-gray-200 bg-blue-50 text-sm text-gray-700 shadow-sm"
                                required
                            />
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="description"
                                   className="block text-sm font-medium text-gray-700"> Description </label>

                            <textarea
                                onChange={(e) => {
                                    setFormData({...FormData, description: e.target.value})
                                }}
                                rows={7}
                                id="description"
                                name="description"
                                className="mt-1 p-4 w-full rounded-md border-gray-200 bg-blue-50 text-sm text-gray-700 shadow-sm"
                                required
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="Category"
                                   className="block text-sm font-medium text-gray-700"> Category </label>

                            <input
                                onChange={(e) => {
                                    setFormData({...FormData, category: e.target.value.toLowerCase()})
                                }}
                                type="text"
                                id="Category"
                                name="Category"
                                className="mt-1 p-4 w-full rounded-md border-gray-200 bg-blue-50 text-sm text-gray-700 shadow-sm"
                                required
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="Keywords"
                                   className="block text-sm font-medium text-gray-700">
                                Keywords
                            </label>

                            <input
                                onChange={(e) => {
                                    setFormData({...FormData, keywords: e.target.value.toLowerCase()})
                                }}
                                type="text"
                                id="Keywords"
                                name="Keywords"
                                className="mt-1 p-4 w-full rounded-md border-gray-200 bg-blue-50 text-sm text-gray-700 shadow-sm"
                                required
                            />
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="MarketingAccept" className="flex gap-4">

                                <span className="text-sm text-gray-700 font-bold">
                                Note: To add porduct in featuerd and popular section, add "featured" and "popular" keyword respectively.
                              </span>
                            </label>
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="image"
                                   className="block text-sm font-medium text-gray-700"> Select Image </label>
                            <input
                                onChange={(e) => {
                                    setSelectedImage(e.target.files[0])
                                }}
                                type="file"
                                multiple={
                                    false
                                }
                                accept={".png , .jpg , .jpeg, .webp"}
                                name="image"
                                className="mt-1 p-4 w-full rounded-md border-gray-200 bg-blue-50 text-sm text-gray-700 shadow-sm"
                                required
                                alt={""}/>
                        </div>
                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <NoBackgroundButton text="Add Product" isLoading={Loading} onPress={null}/>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    </section>
    );
}

export default CreateNewProduct;
