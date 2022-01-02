import React from 'react'
import { useRouter } from 'next/router'

const Footer = () => {
    const router = useRouter()
    return (
        <footer className={`text-gray-600 body-font bg-[#8BCA3A] absolute bottom-0 left-0 right-0 ${router.pathname == "/" ? "hidden" : ""}`}>
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <span className="ml-3 text-xl">Parcel</span>
                </a>
                <p
                    className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2021 Subham Roy —
                    <a href="https://github.com/R0Y4L23" className="text-gray-600 ml-1" rel="noopener noreferrer"
                        target="_blank">@R0Y4L</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href='https://github.com/R0Y4L23' target={"_blank"} rel="noreferrer"><i className="fab fa-github text-[30px] mx-3"></i></a>
                    <a href='https://www.codechef.com/users/r0y4l' target={"_blank"} rel="noreferrer"><i className="fas fa-laptop-code text-[30px] mx-3"></i></a>
                    <a href='https://r0y4l23.itch.io/' target={"_blank"} rel="noreferrer"><i className="fab fa-itch-io text-[30px] mx-3"></i></a>
                </span>
            </div>
        </footer>
    )
}

export default Footer
