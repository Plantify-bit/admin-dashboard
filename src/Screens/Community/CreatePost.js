import React, {useState} from 'react';
import NoBackgroundButton from "../../Components/Global/NoBackgroundButton";
import {createPost} from "../../Api/Community";
import {toastsettings} from "../../Configs/toastSettings";
import {toast} from "react-toastify";

function CreatePost() {
    const [Loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    })
    const [selectedImage, setSelectedImage] = useState(null)
    async function addData() {
        setLoading(true)
        try {
            await createPost({...formData, image: selectedImage})
            toast.success("Post Added Successfully", toastsettings)

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
                        src="https://images.unsplash.com/photo-1718480419942-a21efc9b5409?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Add a New <span className={"text-blue-700"}>Post</span>
                        </h1>

                        <p className="mt-4 leading-relaxed text-gray-500">
                            Fill in the form below to create a new post.
                        </p>

                        <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={async (e) => {
                            e.preventDefault()
                            if (!Loading) {
                                await addData()
                            }
                        }}>
                            <div className="col-span-6">
                                <label htmlFor="Title"
                                       className="block text-sm font-medium text-gray-700"> Title </label>
                                <input
                                    onChange={(e) => {
                                        // setSelectedImage(e.target.files[0])
                                        setFormData({...formData, title: e.target.value})
                                    }}
                                    type="text"
                                    name="Title"
                                    className="mt-1 p-4 w-full rounded-md border-gray-200 bg-blue-50 text-sm text-gray-700 shadow-sm"
                                    required
                                    alt={""}/>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="name"
                                       className="block text-sm font-medium text-gray-700"> Description </label>
                                <textarea
                                    onChange={(e) => {
                                        setFormData({...formData, description: e.target.value})
                                    }}
                                    rows={10}
                                    id="name"
                                    name="name"
                                    className="mt-1 p-4 w-full rounded-md border-gray-200 bg-blue-50 text-sm text-gray-700 shadow-sm"
                                    required
                                />
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

export default CreatePost;
