import React, {useState} from 'react';
// import {Link} from "react-router-dom";
import {toast} from "react-toastify";
// import {login} from "../../Api/auth";
import NoBackgroundButton from "../Components/Global/NoBackgroundButton";
import {loginAdmin} from "../Api/Auth";
import {setAuth} from "../LocalStorage/Auth";
import {toastsettings} from "../Configs/toastSettings";
import {useNavigate} from "react-router-dom";

function Login() {
    // const navigate = useNavigate()
    const [Loading, setLoading] = useState(false)
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    async function Login(){
        try{
            setLoading(true)
            const data = await loginAdmin(email, password)
            setAuth(data.data.token)
            setLoading(false)
            navigate("/admin/home")
        }catch (e) {
            toast.error(e.response.data.message, toastsettings)
            setLoading(false)
        }
    }

    return (
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-2xl">
                    <h1 className="text-2xl font-bold sm:text-6xl">Login <span className={"text-blue-700"}>As</span> Admin!</h1>
                    <p className="mt-4 text-gray-500">
                       Manage your website with ease and comfort.
                    </p>
                </div>

                <form  onSubmit={async (e)=>{
                    e.preventDefault()
                   if(!Loading){
                       await Login()
                   }
                }} className="mx-auto mb-0 mt-8 max-w-2xl space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                onChange={(e)=>{
                                    setemail(e.target.value)
                                }}
                                type="email"
                                className="w-full rounded-lg bg-gray-200 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                required={true}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}
                                type="password"
                                className="w-full bg-gray-200 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                                required={true}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <NoBackgroundButton onPress={null} text={"Login"} isLoading={Loading}/>
                    </div>
                </form>
            </div>

            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </section>
    );
}

export default Login;
