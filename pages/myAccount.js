import React from 'react'

const MyAccount = () => {
    return (
        <div className='p-10 bg-yellow-100 h-[850px]'>
            <p className='text-5xl my-5 text-green-600 font-serif'>Your Account</p>
            <p className='my-10 font-mono text-lg text-green-800'><span className='text-2xl uppercase underline text-green-400'>Email</span> : test@test.com</p>
            <p className='my-10 font-mono text-lg text-green-800'><span className='text-2xl uppercase underline text-green-400'>Username</span> : Subham Roy</p>
            <p className='my-10 font-mono text-lg text-green-800'><span className='text-2xl uppercase underline text-green-400'>Address</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet distinctio culpa sequi et dolore praesentium quasi quod magni repellendus!</p>
        </div>
    )
}

export default MyAccount
