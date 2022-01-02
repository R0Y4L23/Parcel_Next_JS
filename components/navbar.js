import React from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
    return (
        <header className={`text-gray-600 body-font bg-[#8BCA3A] ${router.pathname == "/" ? "hidden" : ""}`}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                    <span className="ml-3 text-xl">Parcel</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <p className={`mr-5 hover:text-gray-900 ${router.pathname == "/home" && "text-gray-900"} cursor-pointer font-medium`} onClick={() => { router.push("/home") }}>Add Parcel</p>
                    <p className={`mr-5 hover:text-gray-900 ${router.pathname == "/myParcels" && "text-gray-900"} cursor-pointer font-medium`} onClick={() => { router.push("/myParcels") }}>My Parcels</p>
                    <p className={`mr-5 hover:text-gray-900 ${router.pathname == "/myAccount" && "text-gray-900"} cursor-pointer font-medium`} onClick={() => { router.push("/myAccount") }}>My Account</p>
                </nav>
                <button
                onClick={() => {router.push("/")}}
                    className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded font-medium text-base mt-4 md:mt-0">Log Out
                    <i className="fas fa-sign-out-alt ml-5"></i>
                </button>
            </div>
        </header>
    )
}

export default Navbar
